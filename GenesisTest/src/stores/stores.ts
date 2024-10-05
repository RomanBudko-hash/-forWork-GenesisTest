import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDropdownStore = defineStore('dropdown', () => {
  const selectList: string[] = ['Не выбрано', 'Сделка', 'Контакт', 'Компания']
  const selected = ref(selectList[0])

  const setSelected = (item: string) => {
    selected.value = item
  }

  return {
    selectList,
    selected,
    setSelected
  }
})

export const useRequestsStore = defineStore('requests', () => {
  const response = ref<string | null>(null)
  const isLoading = ref<boolean>(false)

  const request = async () => {
    try {
      isLoading.value = true
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText)
      }
      response.value = await res.json()
      isLoading.value = false
    } catch (e) {
      console.error(e)
      isLoading.value = false
    }
  }

  return { response, request, isLoading }
})
