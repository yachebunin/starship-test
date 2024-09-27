<template>
  <header class="app-header">
    <NavBar />
    <h1>Welcome to the Galactic Starship Database</h1>
  </header>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  margin-bottom: 20px;
}

h1 {
  color: #ecf0f1;
  font-size: 2.5em;
  margin: 0;
}
</style>
