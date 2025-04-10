<template>
  <h1>index usere</h1>
  <hr />
  <!-- <h2>{{ usere }}</h2>  نشون دادن تمام یوزر هایی که از سرور میگیره. -->

  <div class="container mt-5">
    <div class="row g-5">
      <div v-if="loading">
        <div
          class="spinner-border"
          style="width: 3rem; height: 3rem"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow"
          style="width: 3rem; height: 3rem"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4" >
        <UserCardView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "../components/CardView.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    UserCardView,
  },

  setup() {
    const user = ref({});
    const loading = ref(true);
        const route = useRoute();


    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUser();

    return { user , loading };
  },
};
</script>

<style>
</style>