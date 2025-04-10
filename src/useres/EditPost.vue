<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-6">
    <h1 class="mb-5">Edit Post :</h1>
    <postform
      @formData="Updatepost"
      :button-loading="loading"
      button-text="Edite Post"
      :post="post"
    />
  </div>
</template>

<script>
import postform from "../components/FormWorld.vue";
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

export default {
  components: {
    postform,
  },

  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          pageLoading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    function Updatepost(formData) {
      loading.value = true;
      console.log();
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post update successfully",
            icon: "success",
            confirmButtonText: "Ok",
            backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
  `,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { Updatepost, loading, post, pageLoading };
  },
};
</script>

<style>
</style>