<template>
<div>
  <router-link class="btn btn-dark" :to="{ name : 'CreatePost'}">CreatePost</router-link>
</div>
  <h1>index Post</h1>
  <hr />
  <!-- <h2>{{ usere }}</h2>  نشون دادن تمام یوزر هایی که از سرور میگیره. -->

  <!-- <div v-if="route.params.id == undefined" class="container mt-5"> -->

    <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

   <div v-else class="col-md-6 " v-for="post in posts" :key="post.id">
    <div class="card  btn btn-success ">
      <div class="card-header ">
        <router-link :to="{ name: 'postId', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </div>
      <ul class="list-group list-group-flush ">
        <li class="list-group-item btn btn-light">Body : {{ post.body }}</li>
      </ul>
    </div>
  </div>

  <!-- </div> -->
  <!-- <router-view v-else></router-view> -->
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {


  setup() {
    const posts = ref([]);
    const loading = ref(true);
    const route = useRoute();
    console.log();

    function getposts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getposts();

    return { posts, loading, route };
  },
};
</script>

<style>
</style>