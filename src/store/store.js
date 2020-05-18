import "babel-polyfill"
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    xzvalue:new Date(),
    user: {},
    token: null,
    title: '',
    lang: 'en',
    root:null,
    users:null,
    Adswitch:"false",
  },
  mutations: {
    //REPLAY
    [types.ADSWITCH]: (state, data) => {
      localStorage.adswitch= data
      state.Adswitch=data
    },
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    //USERNAME
    [types.USER]: (state, data) => {
      localStorage.user = data
      state.users = data
    },
    [types.ROOT]: (state, data) => {
      localStorage.root = data
      state.root = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
      localStorage.removeItem('user')
      state.users = null
      localStorage.removeItem('root')
      state.root = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    },
    [types.LANG]: (state, data) => {
      localStorage.lang = data
      state.lang = data
    },
  }
})