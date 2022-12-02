<template>
  <div>
    <h3>{{ $t("welcome") }}</h3>
    <button v-if="!name" @click.prevent="login">{{ $t("auth.login") }}</button>
    <h4>{{ name }}</h4>
    <button v-if="name" @click.prevent="logout">{{ $t("auth.logout") }}</button>
    <hr />
    <form v-if="name">
      <div class="form-group">
        <label for="title">Title</label>
        <input name="title" type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input name="body" type="text" class="form-control" v-model="body" />
      </div>
      <button @click.prevent="createPost">Save</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import moment from "moment";
import { auth, db } from "../firebase/firebase";
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
      title: "",
      body: "",
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
    async createPost() {
      console.log(this.title, this.body);
      await addDoc(collection(db, "/posts"), {
        title: this.title,
        body: this.body,
        createAt: moment().format("LLL"),
        updatedAt: moment().format("LLL"),
        comments: [],
      });
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
