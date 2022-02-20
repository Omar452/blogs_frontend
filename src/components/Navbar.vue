<template>
  <div id="nav" class='flex justify-between'>
    <div>
        <h3 class='text-xl text-green-600'>API Blog</h3>
    </div>
    <div id='nav-links'>
        <router-link to="/"><HomeIcon/> Home</router-link>
        <router-link :to="{name: 'CreateBlog'}">New Blog</router-link>
    </div>
    
  </div>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home.vue' 
export default {
    components: {HomeIcon}
}
</script>

<style>
#nav{
    border-bottom: 1px solid rgb(231, 231, 231);
    margin-bottom: 50px;
}
    #nav-links > *{
        margin-right: 20px
    }
</style>