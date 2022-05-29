<template>
    <vip_title/>
    <silver/>
    <gold/>
    <diamond/>
    <addon/>
    <end/>
</template>

<script>
import vip_title from '@/components/vip_title.vue'
import silver from '@/components/silver.vue'
import gold from '@/components/gold.vue'
import diamond from '@/components/diamond.vue'
import addon from '@/components/addon.vue'
import end from '@/components/end.vue'

export default {
    name: "VIP",
    components: {
        vip_title,
        silver,
        gold,
        diamond,
        addon,
        end
    }
}
</script>