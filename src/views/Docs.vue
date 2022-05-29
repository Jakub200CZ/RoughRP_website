<template>
    <docs_head />
    <end class="absolute inset-x-0 bottom-0" />
</template>

<script>
// @ is an alias to /src
import end from "@/components/end.vue";
import docs_head from "@/components/docs_head.vue";

export default {
  name: "Dokumentace",
  components: {
    end,
    docs_head,
  },
};
</script>
