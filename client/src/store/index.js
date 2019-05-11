/* eslint-disable */
// import createPersistedState from 'vuex-persistedstate';
import authentication from './authentication';
import projects from './projects';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL: '/api',
  },
  modules: {
    authentication,
    projects
  },
  mutations: {

  },
  actions: {

  },
  // plugins: [
  //     createPersistedState(),
  // ],
});
