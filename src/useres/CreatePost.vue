<template>
  <div class="col-md-6">
    <h1 class="mb-5">CreatePost :</h1>

    <postform  @formData="createPost" :button-loading="loading" button-text="Create Post" />

   
  </div>
</template>

<script>
import { ref } from 'vue';
import postform from "../components/FormWorld.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {

    components : {
        postform
    } ,
  setup() {

    const loading =ref(false);
 



 function createPost(formData) {
      loading.value = true;

    //  console.log(formData)
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.Body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;
          Swal.fire({
            title: "Thanks!",
            text: "Post Created successfully",
            icon: "success",
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
    return {createPost ,loading } 
  },

}
 

  
</script>

<style>
</style>