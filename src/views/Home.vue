<template>
  <HelloWorld />
  <end />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import end from '@/components/end.vue'

export default {
  name: "Home",
  components: {
    HelloWorld,
    end,
  },
};
</script>
