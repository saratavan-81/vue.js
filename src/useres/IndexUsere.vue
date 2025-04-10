<template>
  <h1>index usere</h1>
  <hr />
  <!-- <h2>{{ usere }}</h2>  نشون دادن تمام یوزر هایی که از سرور میگیره. -->

  <!-- <div v-if="route.params.id == undefined" class="container mt-5"> -->
  
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
      <div v-else class="col-md-4" v-for="user in usere" :key="user.id">
        <UserCardView :user="user" />
      </div>

  <!-- </div> -->
   <!-- <router-view v-else></router-view> -->
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "../components/CardView.vue";

export default {
  components: {
    UserCardView,
  },

  setup() {
    const usere = ref([]);
    const loading = ref(true);
    console.log()

    function getuseres() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          usere.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getuseres();

    return { usere , loading   };
  },
};
</script>

<style>
</style>