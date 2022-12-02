<template>
  <div>
    <h4>Hello</h4>

    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input name="title" type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input name="body" type="text" class="form-control" v-model="body" />
      </div>
      <button @click.prevent="editPost">Save</button>
    </form>
    <div class="comments">
      <h4>Comments</h4>
      <li v-for="comment in comments">
        {{ comment }}
      </li>

      <form @submit.prevent="addComment">
        <label for="comment">Write Comment</label>
        <input
          name="comment"
          type="text"
          class="form-control"
          v-model="comment"
        />
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {
  doc,
  getDoc,
  query,
  where,
  updateDoc,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      title: "",
      body: "",
      comments: [],
      comment: "",
    };
  },
  methods: {
    async addComment() {
      const docRef = doc(db, "posts", this.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.comments.push(this.comment);
        await updateDoc(docRef, {
          comments: this.comments,
        });
      }
    },
    async editPost() {
      const docRef = doc(db, "posts", this.id);
      await updateDoc(docRef, {
        title: this.title,
        body: this.body,
        updatedAt: moment().format("LLL"),
      });
      this.$router.push("/blog");
    },
  },
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  async mounted() {
    const docRef = doc(db, "posts", this.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      const { title, body, comments } = docSnap.data();
      this.title = title;
      this.body = body;
      this.comments = comments;
    }
  },
};
</script>
