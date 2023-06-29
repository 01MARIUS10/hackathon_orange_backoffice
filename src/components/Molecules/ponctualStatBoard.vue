<template>
    <div class="ponctualsStat d-flex justify-content-between px-3">
        <ponctualStat text="total's sale" :stat=23.3 imgSrc="/image/money.png" />
        <ponctualStat text="total's sale" :stat=12.5 imgSrc="/image/panier2.jpg" />
        <ponctualStat text="total's sale" :stat=22 imgSrc="/image/activity2.jpg" />
        <ponctualStat text="total's sale" :stat=13.1 imgSrc="/image/oeuil3.png" />
    </div>
</template>
<script lang="ts">
import ponctualStat from '@/components/Cellules/ponctualStat.vue'
import {defineComponent} from 'vue'
export default defineComponent({
    name:"ponctualStatBoard",
    components:{ponctualStat}
})
</script>

<style lang="scss">
#ponctualsStat {
    height: 90px;

}
</style>