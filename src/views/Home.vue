<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{allQuotes}}</p>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  
  computed: {
    allQuotes() {
      return store.getters.getAllQuotes
    }
  },
  mounted() {
    store.dispatch('getQuotes')
  }
});
</script>
