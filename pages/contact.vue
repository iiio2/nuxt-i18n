<template>
  <form>
    <div class="form-group">
      <label for="name">{{ $t("contact.name") }}</label>
      <input name="name" v-model="name" class="form-control" />
    </div>
    <div class="form-group">
      <label for="email">{{ $t("contact.email") }}</label>
      <input name="email" v-model="email" class="form-control" />
    </div>
    <div class="form-group">
      <label for="message">{{ $t("contact.message") }}</label>
      <input name="message" v-model="message" class="form-control" />
    </div>
    <button @click.prevent="add" class="btn btn-primary">
      {{ $t("contact.save") }}
    </button>
  </form>
</template>

<script>
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async add() {
      console.log(this.name, this.email, this.message);

      const docRef = await addDoc(collection(db, "/contact"), {
        name: this.name,
        email: this.email,
        message: this.message,
      });
      console.log(docRef);
    },
  },
  mounted() {
    console.log("hello");
  },
};
</script>
