<script setup lang="ts">
import { useRequestsStore } from '@/stores/stores';
import { useDropdownStore } from '@/stores/stores';
const requestsStore = useRequestsStore()
const dropdownStore = useDropdownStore()
</script>

<template>
  <div class="wrapper" v-if="requestsStore.response && dropdownStore.selected !== dropdownStore.selectList[0]">
    <h1>Рузультаты</h1>
    <div class="results" v-for="(item, index) in requestsStore.response" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}
</style>