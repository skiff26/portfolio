<template>
  <div class="left-top-border" v-if="pos === 'lt'">
    <svg
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      style="pointer-events: none"
      data-inlinesvg=".inlineSvgFile-2"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" class="gradient1"></stop>
          <stop offset=".5" class="gradient2"></stop>
          <stop offset="1" class="gradient1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url('#grad1')"
        d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
      ></path>
    </svg>
  </div>
  <div class="right-bottom-border" v-if="pos === 'rb'">
    <svg
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      style="pointer-events: none"
      data-inlinesvg=".inlineSvgFile-6"
    >
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0" class="gradient1"></stop>
          <stop offset=".5" class="gradient2"></stop>
          <stop offset="1" class="gradient1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url('#grad2')"
        d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pos: string
}
const { pos } = defineProps<Props>()
</script>
