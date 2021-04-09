import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quotes: []
  },
  getters: {
    getAllQuotes: state => {
      return state.quotes
    },
    getNumQuotes: num => {
     return axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/${num}`)
      .then(response => response.data)
    },
    getTermQuotes: term => {
      return axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/search/${term}`)
      .then(response => response.data)
    }
  },
  mutations: {
    getQuotes(state, quotes) {
      state.quotes = quotes
    }
  },
  actions: {
    getQuotes({commit}) {
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes/109')
      .then(response => {
        commit('getQuotes', response.data) 
      })
    }
  },
  modules: {
  }
})
