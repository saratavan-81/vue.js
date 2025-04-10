<template>
  
  <div class="card btn btn-warning" >
  <div class="card-header ">
   <router-link :to="{ name : 'usersId' , params: { id: user.id } }"> {{user.name}}</router-link>  
  </div>
  <ul class="list-group list-group-flush ">
    <li class="list-group-item btn btn-info">username : {{user.username}}</li>
    <li class="list-group-item btn btn-success">email : {{user.email}}</li>
    <li class="list-group-item btn btn-danger">phone : {{user.phone}}</li>
  </ul>
</div>

</template>

<script>
export default {
    props :{
        user:Object
    }

}
</script>

<style>

</style>