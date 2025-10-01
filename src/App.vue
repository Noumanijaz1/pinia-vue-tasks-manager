<script setup>
import TaskList from './components/TaskList.vue'
</script>

<template>
  <div class="app">
    <header>
      <div class="header-content">
        <img alt="Pinia logo" class="logo" src="https://pinia.vuejs.org/logo.svg" width="40" height="40" />
        <h1 class="title">Pinia Tasks</h1>
      </div>
    </header>

    <main>
      <TaskList />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  align-items: stretch;
  padding: 0;
}

header {
  width: 100%;
  background: #000000;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto;
}

.title {
  margin: 0;
  font-size: 1.6rem;
  color: #fffff0;
}

.logo {
  width: 40px;
  height: 40px;
}

main {
  flex: 1;
  width: 100%;
  padding: 1.2rem;
  background: #fffff0;
}

main :deep(.task-manager) {
  max-width: 720px;
  margin: 0 auto;
}
</style>
