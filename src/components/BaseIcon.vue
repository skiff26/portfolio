<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="wh ? wh : 20"
    :height="wh ? wh : 20"
    :fill="color ? color : '#777'"
    viewBox="0 0 16 16"
    v-html="path"
  ></svg>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import icons from '../icons'

interface Props {
  name: string
  wh?: string
  color?: string
}

const { name, wh, color } = defineProps<Props>()

const iconsPaths: Record<string, string> = icons

const path = ref(iconsPaths[name])
</script>
