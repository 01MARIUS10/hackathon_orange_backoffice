<template>
    <div id="sidebar" class="">
    <div class="navigation py-4 px-2">
        <p class="d-flex font-weight-bold d-flex pb-2 px-2" style="font-size:20px;">
            <span>Navigation</span>
        </p>
        <ul class="d-flex flex-column w-100  hoverLi">
            <li class="px-3  py-2">
                <p><span class="material-symbols-outlined">home</span></p>
                <span ><RouterLink to="/">Home</RouterLink> </span>
                <p><span class="material-icons">chevron_right</span></p>
            </li>
            <li class="px-3  py-2">
                <p><span class="material-icons" style="font-size:20px;">content_paste</span></p>
                <span ><RouterLink to="/products">Products</RouterLink></span>
                <p><span class="material-icons md-inactive">chevron_right</span></p>
            </li>
            <li class="px-3  py-2">
                <p><span class="material-icons" style="font-size:20px;">event_note</span></p>
                <span ><RouterLink to="/">Historique cells</RouterLink></span>
                <p><span class="material-icons md-inactive">chevron_right</span></p>
            </li>
            <li class="px-3 py-2">
                <p><span class="material-icons" style="font-size:20px;">question_answer</span></p>
                <span ><RouterLink to="/">Chats</RouterLink></span>
                        

                <p><span class="material-icons md-inactive">chevron_right</span></p>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import {defineComponent} from 'vue'
export default defineComponent({
    components:{RouterLink}
})
</script>

<style lang="scss" scoped>
#sidebar {
    width:300px;
    background: var(--white);
    color:var(--greyD);
    ul {
        li{
            font-size: 1.3rem;
            display: flex;
            margin-bottom:12px;
        }
        li>p:first-child{
            width:30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li>p:last-child{
            width:30px;
            display: flex;
            flex-grow: 1;
            justify-content: flex-end;
        }
        li p{
            margin:0;
        }
    }
    a{
        color:var(--greyD);
    }
    .hoverLi li:hover {
      background: var(--secondary);
      border-radius: 5px;
      color: white !important;
      a{
        color: white !important;
      }
    }

}
</style>