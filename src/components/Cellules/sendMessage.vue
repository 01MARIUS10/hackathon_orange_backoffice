<template>
    <div>
        sendmessage
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'sendMessage',
    props:{
        isFromAdmin:{
            type:Boolean,
            default:false
        },
        from:{
            type:Number,
        },
        to:{
            type:Number,
        }
    }
})
</script>
