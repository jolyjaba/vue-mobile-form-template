import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
    newPassword: "",
    newPasswordRepeat: ""
  },
  mutations: {
    setEmail(state, payload) {
      state.email = payload.email;
    },
    setNewPassword(state, payload) {
      state.newPassword = payload.newPassword;
    },
    setNewPasswordRepeat(state, payload) {
      state.newPasswordRepeat = payload.newPasswordRepeat;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getEmail: ({ email }) => email,
    getNewPassword: ({ newPassword }) => newPassword,
    getNewPasswordRepeat: ({ newPasswordRepeat }) => newPasswordRepeat
  }
});
