<template>
  <div class="languages">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :disabled="lang.code === locale"
      @click="switchLocale(lang.code)"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { Lang, LocaleCode } from '@/interfaces'
import { changeLocale } from '@/i18n/translation'
const { locale } = useI18n()
const router = useRouter()

const languages: Lang[] = [
  { name: 'English', code: 'en' },
  { name: 'Українська', code: 'uk' }
]

const switchLocale = (code: LocaleCode) => {
  changeLocale(code)

  try {
    router.replace({ params: { locale: code } })
  } catch (e) {
    console.log(e)
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.languages {
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
  gap: 15px;

  @media (max-width: 500px) {
    justify-content: center;
  }

  button {
    background-color: transparent;
    color: var(--c-text);
    transition: all 0.3s ease;

    &:hover {
      color: var(--c-text-hover);
    }
  }

  button:disabled {
    opacity: 0.6;
  }
}
</style>
