<template>
  <div>
    <h3>{{ $t("welcome") }}</h3>
    <button v-if="!name" @click.prevent="login">{{ $t("auth.login") }}</button>
    <h4>{{ name }}</h4>
    <button v-if="name" @click.prevent="logout">{{ $t("auth.logout") }}</button>
  </div>
</template>

<script>
import { auth } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async login() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    },
    async logout() {
      await signOut(auth);
      window.location.href = "/";
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        this.name = user.displayName;
      }
    });
  },
};
</script>
