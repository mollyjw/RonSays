import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quotes: [],
    searchedQuotes: []
  },
  getters: {
    getAllQuotes: state => {
      return state.quotes
    },
    getTermQuotes: state => {
      return state.searchedQuotes
    }
  },
  mutations: {
    getQuotes(state, quotes) {
      state.quotes = quotes
    },
    getSearchedQuotes(state, quotes) {
      state.searchedQuotes = quotes
    },
    clearSearchedQuotes(state) {
      state.searchedQuotes.splice(0, state.searchedQuotes.length)
    }
  },
  actions: {
    getQuotes({commit}) {
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes/109')
      .then(response => {
        commit('getQuotes', response.data) 
      })
    },
    getSearchedQuotes({commit}, term: string) {
      // context.commit('clearSearchedQuotes')
      async () => {
        await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/search/' + term)
        .then(response => {
        commit('getSearchedQuotes', response.data)
        })
      }
    }
  },
  modules: {
  }
})
