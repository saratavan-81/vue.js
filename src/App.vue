<template>


<HeaderWorld />


  <router-view></router-view>
</template>

<script>
import HeaderWorld from './components/HeaderWorld.vue'
export default {
  name: "App",
  components : {
    HeaderWorld
  }
};
</script>

<style>
</style>
