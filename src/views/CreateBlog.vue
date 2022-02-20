<template>
    <div>
        <h1 class='text-xl text-green-600'>Create New Blog</h1>
        <div class='w-1/3 mx-auto my-10'>
            <form class='flex flex-col py-5 px-10 bg-gray-200' @submit.prevent="handleSubmit">
                <label>Title</label>
                <input class='mb-5 p-2' v-model="title" type='text' name='title'>
                <div v-if="errors.title" class='mb-5 p-2 bg-red-100 text-red-600 errors'>
                    <div v-for="error in errors.title" :key="error">{{error}}</div>    
                </div>

                <label>Content</label>
                <textarea class='mb-5 p-2 h-96' v-model="body" name="body"></textarea>
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
import { useRouter } from 'vue-router'
export default {
    setup(){
        const title = ref('')
        const body = ref('')
        const errors = ref({
            title: null,
            body: null
        })

        const router = useRouter()

        const handleSubmit = () => {
            axios.post('http://localhost:8000/api/blogs', {
                title: title.value,
                body: body.value
            })
            .then(res => {
                if(res.status == 200){
                    router.push('/')
                } else{
                    console.log(res.data)
                }
            })
            .catch(error => {
                console.log(error)
                errors.value = error.response.data.errors
                setTimeout(() => {
                    errors.value = {
                        title: null,
                        body: null
                    }
                }, 5000)
            })
        }  

        return { title, body, errors, handleSubmit}
    }
}
</script>

<style>

</style>