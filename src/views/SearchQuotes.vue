<template>
    <v-sheet>
    <v-text-field v-model="term" label="term"></v-text-field>
    <v-btn v-on:click="search(term)">Search </v-btn>
    <p>{{results}}</p>
    </v-sheet>
</template>

<script lang="ts">
import store from '@/store'
import Vue from 'vue'
export default Vue.extend({
    name: 'SearchQuotes',
    data() {
        return {
            term: "",
            results: []
        }
    },
    methods: {
        search(term: string){
            this.results = store.dispatch('getSearchedQuotes', term)
            console.log(this.results)
        }
    }

})
</script>