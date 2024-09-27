<template>
  <div class="starships-list">
    <h1>Starships List</h1>
    <input v-model="searchQuery" @input="updateQuery" placeholder="Search for a starship" class="search-bar" />
    <ul class="starships">
      <li v-for="starship in filteredStarships" :key="starship.name" class="starship-item">
        <router-link :to="'/starship/' + starship.id">{{ starship.name }}</router-link>
      </li>
    </ul>
    <div class="pagination">
      <button @click="prevPage" :disabled="!prev" class="pagination-button">Prev</button>
      <button @click="nextPage" :disabled="!next" class="pagination-button">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      starships: [],
      searchQuery: this.$route.query.search || '',
      next: null,
      prev: null,
      filteredStarships: [],
    };
  },
  created() {
    this.fetchStarships();
  },
  watch: {
    searchQuery() {
      this.searchStarships();
    },
    '$route.query.search'(newSearch) {
      this.searchQuery = newSearch || '';
    },
  },
  methods: {
    fetchStarships(url = 'https://swapi.dev/api/starships/') {
      axios.get(url).then((response) => {
        this.starships = response.data.results.map((ship) => ({
          ...ship,
          id: ship.url.match(/\/([0-9]*)\/$/)[1],
        }));
        this.filteredStarships = this.starships;
        this.next = response.data.next;
        this.prev = response.data.previous;
      });
    },
    searchStarships() {
      const query = this.searchQuery.toLowerCase();
      if (query) {
        axios
            .get(`https://swapi.dev/api/starships/?search=${query}`)
            .then((response) => {
              this.starships = response.data.results.map((ship) => ({
                ...ship,
                id: ship.url.match(/\/([0-9]*)\/$/)[1],
              }));
              this.filteredStarships = this.starships;
              this.next = response.data.next;
              this.prev = response.data.previous;
            });
      } else {
        this.fetchStarships();
      }
    },
    updateQuery() {
      this.$router.push({ query: { search: this.searchQuery } });
    },
    nextPage() {
      if (this.next) {
        this.fetchStarships(this.next);
      }
    },
    prevPage() {
      if (this.prev) {
        this.fetchStarships(this.prev);
      }
    },
  },
};
</script>

<style scoped>
.starships-list {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #34495e;
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

.starships {
  list-style-type: none;
  padding: 0;
}

.starship-item {
  margin: 10px 0;
}

.starship-item a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  font-size: 1.2em;
}

.starship-item a:hover {
  color: #3498db;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pagination-button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #ccc;
}

.pagination-button:hover:not(:disabled) {
  background-color: #3498db;
}
</style>
