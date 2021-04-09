<template>
  <div class="home">
    <h1>Welcome to Ron Says</h1>
    <v-btn v-on:click="getRandom"> get quote </v-btn>
    <p> {{random}} </p>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      random: ""
    }
  },
  computed: {
    allQuotes() {
      return store.getters.getAllQuotes
    }
  },
  methods: {
    getRandom() {
      this.random = this.allQuotes[Math.floor(Math.random() * this.allQuotes.length)]
    }
  },
  mounted() {
    store.dispatch('getQuotes')
  }
});
</script>
