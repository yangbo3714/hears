<template>
  <div id="app">
   <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
       <AppAside></AppAside>
       <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
         <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// import Vue from 'vue'
// import router from 'vue-router'

import AppHeader from './component/AppHeader.vue'
import AppAside from './component/AppAside.vue'







export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    AppHeader:AppHeader,
    AppAside:AppAside
  }
}
</script>

<style>

</style>
