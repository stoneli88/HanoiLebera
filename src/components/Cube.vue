<script setup lang="ts">
  defineProps<{
    title: string,
    borderColor: string
  }>()
</script>

<template>
  <div class="cube-container" :style="{ borderColor: borderColor }">
    A1
  </div>
</template>

<style scoped>
.cube-container {
  display: flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  font-size: 12px;
}
</style>
