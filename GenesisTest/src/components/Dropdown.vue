<script setup lang="ts">
import { ref } from 'vue'
import { useDropdownStore } from '@/stores/stores';

const dropdownStore = useDropdownStore()
const isOpened = ref(false)

const openList = () => {
  isOpened.value = !isOpened.value
}

const chooseItem = (item: string) => {
  dropdownStore.setSelected(item)
  isOpened.value = false
}
</script>

<template>
  <div class="wrapper">
    <div class="dropdown" :class="isOpened ? 'dropdown_active' : ''">
      <div class="dropdown__field" :class="isOpened ? 'dropdown__field_active' : ''" @click="openList">{{
        dropdownStore.selected
        }}
        <div :class="isOpened ? 'arrow-up' : 'arrow-down'" />
      </div>
      <ul class="dropdown__list" :class="isOpened ? 'dropdown__list_active' : ''">
        <li class="dropdown__list-item" v-for="(item, index) in dropdownStore.selectList" :key="index"
          @click="chooseItem(item)">{{
            item
          }}</li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.dropdown {
  height: 100%;
  border-radius: 5px;
  transition: .3s;
}

.dropdown_active {
  border: 1px solid black;
  transition: .3s;
}

.dropdown__field {
  width: 300px;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: .3s;
}

.dropdown__field_active {
  border-top: none;
  border-right: none;
  border-left: none;
  transition: .3s;
}

.dropdown__list {
  height: 0;
  margin: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: .3s;
}

.dropdown__list_active {
  height: 100px;
  transition: .3s;
}

.dropdown__list-item {
  padding: 3px;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
}

.dropdown__list-item:hover {
  background-color: #dde2e7;
  transform: translateX(10px);
  transition: 0.3s;
}

.arrow-down {
  width: 7px;
  height: 7px;
  border: solid #616e7b;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  transition: .3s;
}

.arrow-up {
  width: 7px;
  height: 7px;
  border: solid #616e7b;
  border-width: 0 1px 1px 0;
  transform: rotate(-135deg);
  transition: .3s;
}
</style>