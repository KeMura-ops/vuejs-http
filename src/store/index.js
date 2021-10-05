import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit }, authData) {
      axios.post(
        // FirebaseAuthとWebAPIキー
        '/accounts:signInWithPassword?key=AIzaSyDbfw-lHMT91BRYpNn_Q3BOZgDWkX6N6BA',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        commit('updateIdToken', response.data.idToken);
      });
    },
    register({ commit }, authData) {
      axios.post(
        // FirebaseAuthとWebAPIキー
        '/accounts:signUp??key=AIzaSyDbfw-lHMT91BRYpNn_Q3BOZgDWkX6N6BA',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        commit('updateIdToken', response.data.idToken);
      });
    },
  }
});