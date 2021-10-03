<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input id="email" type="email" v-model="email">
    <br><br>
    <label for="password">Password：</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="login">送信</button>
  </div>
</template>

<script>
import axios from '../axios-auth';

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios.post(
        // FirebaseAuthとWebAPIキー
        '/accounts:signInWithPassword?key=AIzaSyDbfw-lHMT91BRYpNn_Q3BOZgDWkX6N6BA',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then(response => {
        console.log(response);
      });
      this.email = '';
      this.password = '';
    }
  }
};
</script>