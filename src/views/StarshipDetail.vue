<template>
  <div class="starship-details" v-if="starship">
    <h1>{{ starship.name }}</h1>
    <p><strong>Model:</strong> {{ starship.model }}</p>
    <p><strong>Manufacturer:</strong> {{ starship.manufacturer }}</p>
    <p><strong>Cost in credits:</strong> {{ starship.cost_in_credits }}</p>
    <p><strong>Length:</strong> {{ starship.length }}</p>
    <p><strong>Max atmosphering speed:</strong> {{ starship.max_atmosphering_speed }}</p>
    <p><strong>Crew:</strong> {{ starship.crew }}</p>
    <p><strong>Passengers:</strong> {{ starship.passengers }}</p>
    <router-link to="/starships" class="back-link">Back to list</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      starship: null,
    };
  },
  created() {
    this.fetchStarship();
  },
  methods: {
    fetchStarship() {
      const id = this.$route.params.id;
      axios.get(`https://swapi.dev/api/starships/${id}/`).then((response) => {
        this.starship = response.data;
      });
    },
  },
};
</script>

<style scoped>
.starship-details {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

h1 {
  font-size: 2.2em;
  margin-bottom: 20px;
}

p {
  font-size: 1.1em;
  color: #2c3e50;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
  color: #2980b9;
}
</style>
