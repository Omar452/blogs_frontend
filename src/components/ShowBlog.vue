<template>
  <div v-if="blog" class='text-justify mb-5'>
    <h1 class='text-green-600 text-bold mb-3 font-bold'>{{ blog.title }}</h1>
    <p class='mb-3 max-w-screen-md'>{{ blog.body }}</p>
    <p class='text-sm'>{{ blog.author }}</p>

    <div class="flex flex-row mt-5">
      <router-link :to="{name: 'EditBlog'}" class="bg-blue-500 rounded-sm text-white px-4 py-1 mr-3 ">
        <Pencil/> Edit
      </router-link>
      <button @click="handleDelete" class="bg-red-500 rounded-sm text-white px-4 py-1">
        <Delete/> Delete
      </button>
    </div>
  </div>
  
</template>

<script>
import Pencil from 'vue-material-design-icons/Pencil.vue'
import Delete from 'vue-material-design-icons/Delete.vue'

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
export default {
    components: {Delete, Pencil},
    setup(){
        const blog = ref(null)
        const route = useRoute()
        const router = useRouter()
        const id = route.params.id

        axios.get('http://localhost:8000/api/blogs/' + id)
            .then( res => blog.value = res.data)
            .catch( err => console.log(err))

        const handleDelete = () => {
          axios.delete('http://localhost:8000/api/blogs/' + id)
            .then((res) => {
              router.push('/')
            })  
            .catch(err => console.log(err.response))
        }

        return { blog, handleDelete }
    }

}
</script>

<style>

</style>