<template>
    <div class="celluleStat d-flex justify-content-between border border-secondary h-100 px-3">
    <div class="image d-flex justify-content-center align-item-center py-2">
        <img :src="imgSrc" class="border border-warning rounded-circle" alt="logo" >
    </div>
    <div class=" border border-danger d-flex flex-column align-items-center justify-content-center">
        <p class="pb-0 m-0" ><strong>{{ stat }}</strong></p>
        <p class="pb-0 m-0">{{ text }}</p>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'ponctualStat',
    props:{
        text:{
            type:String,
            default:"total's sale"
        },
        stat:{
            type:Number,
            default: 22.32
        },
        imgSrc:{
            type:String,
            default:''
        }
    }
})
</script>
<style scoped>
.celluleStat{
        min-width: 23%;
        background: var(--white);
        border-radius: 3px;
    }
    p strong{
        font-size: 1.5rem;
        font-weight: bolder;
    }
    p:last-child{
        font-size: 1.3rem;
        color:var(--greyD);
    }
img{
    width: 70px;
    height: 70px;
}
</style>