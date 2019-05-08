/* eslint-disable */

import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    registerEmail: 'tangenishikomba@testing.com',
    registerPassword: '12345678',
    registerError: null,
    token: null,
  },
  actions: {
    register({ commit, state }) {
      return HTTP().post('auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      }).then(({ data }) => {
        console.log(data);
        commit('setToken', data.token);
        router.push('/');
      }).catch(() => {
        commit('setRegisterError', 'An error has occured trying to create your account')
      });
    },
  },
  mutations: {
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setToken(state, token) {
      state.token = token;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
