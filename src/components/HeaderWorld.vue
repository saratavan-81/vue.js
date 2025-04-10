<template>


  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Webprog.ir</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
              <router-link class="nav-link" to="/Users">Useres</router-link>
        </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/Posts">Post</router-link>
        </li>
       
       
     
      </ul>
     
    </div>
  </div>
</nav>


</template>

<script>
export default {
    name : "HeaderWorld"

}
</script>

<style>

.router-link-active {
  color: rgba(25, 195, 224, 0.9) !important;
  border-bottom: 2px solid rgba(60, 12, 231, 0.9) !important;
}

</style>