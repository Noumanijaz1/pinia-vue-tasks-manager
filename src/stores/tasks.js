import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'pinia-tasks-v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.warn('Failed to load tasks from localStorage', e)
    return []
  }
}

function save(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch (e) {
    console.warn('Failed to save tasks to localStorage', e)
  }
}

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref(load())

  const favs = computed(() => tasks.value.filter(t => t.fav))
  const total = computed(() => tasks.value.length)

  function addTask(title, description = '') {
    if (!title || !title.trim()) return
    const task = {
      id: Date.now() + Math.floor(Math.random() * 999),
      title: title.trim(),
      description: description.trim(),
      fav: false,
      createdAt: new Date().toISOString(),
    }
    tasks.value.unshift(task)
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  function toggleFav(id) {
    const t = tasks.value.find(x => x.id === id)
    if (t) t.fav = !t.fav
  }

  // persist
  watch(tasks, (newVal) => save(newVal), { deep: true })

  return { tasks, favs, total, addTask, removeTask, toggleFav }
})
