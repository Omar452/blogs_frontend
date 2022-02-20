<template>
  <div class="my-5">
    <button @click="handleClick" class="bg-green-500 rounded-sm text-white px-4 py-1">
      <Reply/> Return
    </button>
  </div>
</template>

<script>
import Reply from 'vue-material-design-icons/Reply.vue' 
import { useRouter } from 'vue-router'
export default {
  components: {Reply},
    setup(){
        const router = useRouter()
        const handleClick = () => {
            router.go(-1)
        }

        return { handleClick }
    }

}
</script>