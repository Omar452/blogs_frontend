<template>
  <Navbar />
  <router-view />
  <div class='text-left' v-if="!isHome">
    <ReturnButton />
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import ReturnButton from './components/ReturnButton'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
 components: {Navbar, ReturnButton},
 setup(){
    const route = useRoute()
    const isHome = ref('')

    watch( () => route.name, () => {
      if(route.name == 'Home'){
        isHome.value = true
      } else{
        isHome.value = false
      }
    })
    
    return { isHome }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
