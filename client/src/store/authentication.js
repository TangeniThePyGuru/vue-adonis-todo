import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    registerEmail: 'tangenishikomba@testing.com',
    registerPassword: '12345678',
  },
  actions: {
    register({ state }) {
      return HTTP().post('auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      });
    },
  },
  mutations: {
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
