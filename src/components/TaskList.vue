<script setup>
import { ref, computed } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import TaskForm from './TaskForm.vue'
import TaskItem from './TaskItem.vue'

const store = useTasksStore()
const showFavsOnly = ref(false)

const displayedTasks = computed(() => {
  return showFavsOnly.value ? store.favs : store.tasks
})
</script>

<template>
  <section class="task-manager">
    <TaskForm @add="(title, desc) => store.addTask(title, desc)" />

    <div class="meta">
      <p>
        Total: <strong>{{ store.total }}</strong> • 
        Favourites: <strong>{{ store.favs.length }}</strong>
      </p>
      <div class="filter">
        <button 
          class="filter-btn" 
          :class="{ active: !showFavsOnly }"
          @click="showFavsOnly = false"
        >
          All Tasks
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: showFavsOnly }"
          @click="showFavsOnly = true"
        >
          Favorites ★
        </button>
      </div>
    </div>

    <div class="list">
      <TaskItem 
        v-for="task in displayedTasks" 
        :key="task.id" 
        :task="task" 
        @delete="store.removeTask" 
        @toggle-fav="store.toggleFav" 
      />
    </div>

    <p v-if="showFavsOnly && !store.favs.length" class="empty-message">
      No favorite tasks yet. Click the ★ on a task to add it to favorites.
    </p>
  </section>
</template>

<style scoped>
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.6rem 0 1rem;
  color: #fffff0;
}

.filter {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #fffff0;
  background: transparent;
  color: #fffff0;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover, .filter-btn.active {
  background: #fffff0;
  color: #000000;
}

.empty-message {
  text-align: center;
  margin-top: 2rem;
  color: rgba(255, 255, 240, 0.7);
  font-style: italic;
}
</style>

<style scoped>
.task-manager {
  background: #000000;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  color: #fffff0;
}

.meta {
  margin: 0.6rem 0 1rem;
  color: var(--muted, #666);
}

.list {
  display: grid;
  gap: 0.6rem;
}
</style>