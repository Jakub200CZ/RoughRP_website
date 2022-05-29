<template>
    <rules_head/>
    <zaklad_pravidla/>
    <gross/>
    <ujizdeni/>
    <rdm/>
    <majetek/>
    <safe_zony/>
    <inv/>
    <bugs/>
    <zap_frak/>
    <frakce/>
    <multichar/>
    <other/>
    <end/>
</template>

<script>
import zaklad_pravidla from "@/components/zaklad_pravidla.vue";
import rules_head from "@/components/rules_head.vue";
import gross from "@/components/gross.vue";
import ujizdeni from '@/components/ujizdeni.vue'
import rdm from '@/components/rdm.vue'
import majetek from '@/components/majetek.vue'
import safe_zony from '@/components/safe_zony.vue'
import inv from '@/components/inv.vue'
import bugs from '@/components/bugs.vue'
import zap_frak from '@/components/zap_frak.vue'
import frakce from '@/components/frakce.vue'
import multichar from '@/components/multichar.vue'
import other from '@/components/other.vue'
import end from '@/components/end.vue'

export default {
  name: "pravidla",
  components: {
    zaklad_pravidla,
    rules_head,
    gross,
    ujizdeni,
    rdm,
    majetek,
    safe_zony,
    inv,
    bugs,
    zap_frak,
    frakce,
    multichar,
    other,
    end,
  },
};
</script>