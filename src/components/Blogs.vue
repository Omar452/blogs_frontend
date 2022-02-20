<template>
    <div v-if="blogs.length">
        <div v-for="blog in blogs" :key="blog.id">
            <div class='text-justify mb-5'>
                <router-link :to="'/blogs/' + blog.id"><h2 class='text-green-600 text-bold mb-3 font-bold'>{{ blog.title }}</h2></router-link>
                <p class='mb-3 max-w-screen-md'>{{ blog.body }}</p>
                <p class='text-sm'>{{ blog.author }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
  
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
    setup(){
        const blogs = ref([])

        onMounted(() => {
            axios.get('http://localhost:8000/api/blogs')
            .then((res) => {
                blogs.value = res.data
                //console.log(blogs.value)
            })
            .catch(err => console.log(err))
        })
        
        return { blogs }
    }
}
</script>

<style>

</style>