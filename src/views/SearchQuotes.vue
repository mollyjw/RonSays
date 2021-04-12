<template>
  <v-sheet color="accent" height="55em" width="100%">
      <h1 style="text-align: center; padding-top: 2%"> Want to see if Ron has an opinion on a topic?</h1>
        <h1 style="text-align: center"> Search it below! </h1>
    <v-text-field v-model="term" label="term" style="margin-top: 2%; margin-bottom: 2%; margin-left: 20%; margin-right: 20%"></v-text-field>
    <v-btn style="margin-left: 50%" color="primary" v-on:click="search(term)">Search </v-btn>
    <v-container fluid mt-4>
        <v-row dense>
            <v-col v-for="result in results" v-bind:key="result.id" :cols="4">
                <v-card color="primary" style="font-size: 2em; padding: 2%">
                    {{result}}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-sheet>
</template>

<script lang="ts">
import store from '@/store'
import Vue from 'vue'
export default Vue.extend({
    name: 'SearchQuotes',
    data() {
        return {
            term: ""
        }
    },

    computed: {
        results(){
            return store.getters.getTermQuotes
        }
    },
    methods: {
        search(term: string){
            store.dispatch('getSearchedQuotes', term);
        }
    }

})
</script>