<script setup lang="ts">
import { computed } from 'vue';
import { useDropdownStore } from '@/stores/stores';
import { useRequestsStore } from '@/stores/stores';

const requestsStore = useRequestsStore()
const dropdownStore = useDropdownStore()

const isActive = computed(() => dropdownStore.selected !== dropdownStore.selectList[0])
</script>

<template>
  <button v-if="!requestsStore.isLoading" :disabled="!isActive"
    :class="['button', isActive ? 'button_active' : 'button_disabled']" @click="requestsStore.request">
    Создать
  </button>
  <div v-else class="button wrapper">
    <div class="loading" />
  </div>
</template>

<style scoped>
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  transition: 0.3s;
}

.button_active {
  cursor: pointer;
  background-color: #3175b8;
  color: white;
}

.button_disabled {
  cursor: not-allowed;
}

.wrapper {
  background-color: #3175b8;
}

.loading {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3175b8;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>