<template>
    <gov_title/>
    <gov_inside/>
    <end/>
</template>

<script>
import gov_title from '@/components/gov_title.vue'
import end from '@/components/end.vue'
import gov_inside from '@/components/gov_inside.vue'

export default {
    name: "gov",
    components: {
        gov_title,
        end,
        gov_inside
    }
}
</script>