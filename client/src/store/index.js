/* eslint-disable */
// import createPersistedState from 'vuex-persistedstate';
import authentication from './authentication';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL: '/api',
  },
  modules: {
    authentication
  },
  mutations: {

  },
  actions: {

  },
  // plugins: [
  //     createPersistedState(),
  // ],
});
