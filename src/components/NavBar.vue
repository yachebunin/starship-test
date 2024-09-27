<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/starships">Starships List</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}

.navbar a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 10px;
}

.navbar a:hover {
  text-decoration: underline;
  color: #3498db;
}
</style>
