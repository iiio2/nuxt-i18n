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
  </div>
</template>

<script>
import moment from "moment";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
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
      const { title, body } = docSnap.data();
      this.title = title;
      this.body = body;
    }
  },
};
</script>
