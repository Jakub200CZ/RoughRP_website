<template>
    <div class="main">
        <h1 class="text-2xl font-bold text-gray-300">Welcome</h1>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
