<template>
    <div v-if="blog">
        <h1 class='text-xl text-green-600'>Edit Blog</h1>
        <div class='w-1/3 mx-auto my-10'>
            <form class='flex flex-col py-5 px-10 bg-gray-100' @submit.prevent="handleSubmit">
                <label>Title</label>
                <input class='mb-5 p-2' v-model="title" type='text'>
                <div v-if="errors.title" class='mb-5 p-2 bg-red-100 text-red-600 errors'>
                    <div v-for="error in errors.title" :key="error">{{error}}</div>    
                </div>

                <label>Content</label>
                <textarea class='mb-5 p-2 h-96' v-model="body"></textarea>
                <div v-if="errors.body" class='mb-5 p-2 bg-red-100 text-red-600 errors'>
                    <div v-for="error in errors.body" :key="error">{{error}}</div>       
                </div>

                <button class='text-white bg-green-500 py-1 px-3 rounded-sm'>Submit</button>
            </form>
        </div>
    </div>   
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
export default {
    setup(){
        const title = ref(null)
        const body = ref(null)
        const blog = ref(false)
        const errors = ref({
            title: null,
            body: null
        })
        const isError = ref(false);

        const router = useRouter()
        const route = useRoute()

        const id = route.params.id

        axios.get('http://localhost:8000/api/blogs/' + id)
            .then( res => {
                title.value = res.data.title
                body.value = res.data.body
                blog.value = true
            })
            .catch( err => console.log(err))

        const handleSubmit = () => {
            
            axios.put('http://localhost:8000/api/blogs/' + id , {
                title: title.value,
                body: body.value
            })
            .then(res => {
                
                if(res.status == 200){
                    router.push('/blogs/' + id)
                } else{
                    console.log(res.data, res.messageText)
                }
                
            })
            .catch(error => {
                //console.log(error.data, error.messageText)
                errors.value = error.response.data.errors
                setTimeout(() => {
                    errors.value = {
                        title: null,
                        body: null
                    }
                }, 5000)
            })
        }

        

        return { title, body, blog, errors, handleSubmit}
    }
}
</script>

<style>

</style>