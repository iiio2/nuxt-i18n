<template>
  <div>
    <h3 class="font-bold text-3xl">Blog</h3>
    <li v-for="post in posts">
      Title -
      <NuxtLink class="underline underline-offset-4" :to="post.id">{{
        post.title
      }}</NuxtLink>
      | Body -
      {{ post.body }}
    </li>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      const post = {
        id: doc.id,
        title: doc.data().title,
        body: doc.data().body,
      };
      this.posts.push(post);
    });
  },
};
</script>
