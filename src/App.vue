<template>
  <v-app>
    <div> <Header /> </div>
    <div> 
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
});
</script>
