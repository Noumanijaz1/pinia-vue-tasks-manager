<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const title = ref('')
const description = ref('')

function submit() {
  if (!title.value.trim()) return
  emit('add', title.value, description.value)
  title.value = ''
  description.value = ''
}
</script>

<template>
  <form class="task-form" @submit.prevent="submit">
    <div class="row">
      <input v-model="title" placeholder="Task title" autofocus />
      <button type="submit">Add</button>
    </div>
    <textarea v-model="description" placeholder="Optional description" rows="2"></textarea>
  </form>
</template>

<style scoped>
.task-form input,
.task-form textarea {
  width: 100%;
  padding: 0.55rem;
  border: 1px solid #fffff0;
  border-radius: 6px;
  font-size: 0.95rem;
  background: #fffff0;
  color: #000000;
}

.task-form .row {
  display: flex;
  gap: 0.5rem;
}

.task-form button {
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: 2px solid #fffff0;
  background: transparent;
  color: #fffff0;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.task-form button:hover {
  background: #fffff0;
  color: #000000;
}

.task-form textarea {
  margin-top: 0.6rem;
}
</style>