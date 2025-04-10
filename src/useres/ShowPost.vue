<template>
  <h1>index Post</h1>
  <hr />
  <!-- <h2>{{ usere }}</h2>  نشون دادن تمام یوزر هایی که از سرور میگیره. -->

  <!-- <div v-if="route.params.id == undefined" class="container mt-5"> -->

    <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

   <div v-else class="col-md-6 ">
    <div class="card  ">
      <div class="card-header ">
        <!-- <router-link :to="{ name: 'postId', params: { id: post.id } }"> -->
          {{ post.title }}
        <!-- </router-link> -->
      </div>
      <ul class="list-group list-group-flush ">
        <li class="list-group-item ">Body : {{ post.body }}</li>
      </ul>
       <div class="card-footer">
      <button @click="daletepost" class="btn btn-sm btn-danger me-4">Delete</button>
      <router-link class="btn btn-sm  btn-dark" :to="{name:'EditPost' , params:{id:post.id}}">Edit</router-link>

      
    </div>
    </div>
   
  </div>

  <!-- </div> -->
  <!-- <router-view v-else></router-view> -->
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from 'sweetalert2';

export default {


  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    console.log();

    function getpost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getpost();


    function daletepost(){

         axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          // handle success

             Swal.fire({
            title: "Thanks!",
            text: `Post (${route.params.id}) Delete successfully`,
            icon: "warning",
            color: "dark",
            backdrop: `
                rgba(0,0,123,0.2)
                
                url("/images/nyan-cat.gif")
                left top
                no-repeat
                    `,
            confirmButtonText: "Ok",
          });
     
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

    }

    return { post, loading, route ,daletepost };
  },
};
</script>

<style>
</style>