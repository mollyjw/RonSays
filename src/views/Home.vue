<template>
  <v-sheet color="accent" height="55em" width="100%">
    <h1 >Welcome to Ron Says</h1>
    <v-row no-gutters>
      <v-col cols="12" sm="8" md="8">
        <v-img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/parks-and-recreation_32716.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="4" md="4" style="text-align: center">
        <h1>Get a Ron Swanson Quote!</h1>
        <v-img src="https://wwrnet.com/pics/speech-bubble.png"
                 class="black--text align-center"
        >
          <br>
          <p style="padding: 10%; font-size: 1.5em">{{ random }}</p>
        </v-img>
        <br>
        <v-btn v-on:click="getRandom" color="primary"> get quote </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      random: "",
    };
  },
  computed: {
    allQuotes() {
      return store.getters.getAllQuotes;
    },
  },
  methods: {
    getRandom() {
      this.random = this.allQuotes[
        Math.floor(Math.random() * this.allQuotes.length)
      ];
    },
  },
  mounted() {
    store.dispatch("getQuotes");
  },
});
</script>
