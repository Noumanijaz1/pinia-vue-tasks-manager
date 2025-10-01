<script setup>
import { toDisplayString } from 'vue'

const props = defineProps({
  task: { type: Object, required: true }
})

const emit = defineEmits(['delete', 'toggle-fav'])

function remove() {
  emit('delete', props.task.id)
}

function toggleFav() {
  emit('toggle-fav', props.task.id)
}
</script>

<template>
  <div class="task">
    <div class="left">
      <button class="fav" :aria-pressed="task.fav" @click="toggleFav">{{ task.fav ? '★' : '☆' }}</button>
    </div>

    <div class="body">
      <div class="head">
        <h4 class="title">{{ task.title }}</h4>
        <div class="controls">
          <button class="delete" @click="remove">Delete</button>
        </div>
      </div>

      <p v-if="task.description" class="desc">{{ task.description }}</p>
      <p class="meta">Created: {{ new Date(task.createdAt).toLocaleString() }}</p>
    </div>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  gap: 0.6rem;
  padding: 0.6rem;
  border-radius: 6px;
  background: rgba(255, 255, 240, 0.1);
  border: 1px solid #fffff0;
  color: #fffff0;
}

.fav {
  color: #fffff0;
}

.meta {
  color: rgba(255, 255, 240, 0.7) !important;
}

.controls .delete {
  background: transparent;
  border: 1px solid #ff4444;
  color: #ff4444;
  transition: all 0.2s;
}

.controls .delete:hover {
  background: #ff4444;
  color: #000000;
}

.left {
  display: flex;
  align-items: flex-start;
}

.fav {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.body { flex: 1 }

.head { display: flex; justify-content: space-between; align-items: center }

.title { margin: 0; font-size: 1rem }

.controls .delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
}

.desc { margin: 0.4rem 0 }

.meta { font-size: 0.8rem; color: #666 }
</style>