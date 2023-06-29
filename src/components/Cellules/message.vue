<template>
    <div class="h-100 d-flex flex-column">
        <div class="">
            <div class="my-4">
                <p class="text-center"><span class="border border-dark p-2 ">precedente...</span></p>
            </div>
            <div
            v-for="message in messages"
            :class="getClass(message.userAdmin)"
            >
                    <div class="image d-flex align-items-end mx-4" style="width:50px">
                        <img :src="message.userPhoto" alt="" style="width:50px">
                    </div>
                    <div class="messageContenu messageStyle py-2 px-3" >
                        <div class="">
                            <p class="username">{{ message.username }}</p>
                            <p class="content">{{ printContent(message.content) }}</p>
                            <p class="hour">{{ message.time }}</p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="w-100 p-4 d-flex align-items-end justify-content-end" style="flex-grow:1">
            <div class=" d-flex sendBox p-1">
                <input type="text" name="" id="" placeholder="Ecrivez votre message ici" class="input" style="width:400px; padding:5px">
                <button>Submit</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sendMessage from '../Cellules/sendMessage.vue'
export default defineComponent({
    name:"message",
    components:{sendMessage},
    props:{
        messages:{
            default:[
                {
                    content:'test de contenu',
                    date : "22/02/23 ",
                    time : "07:23",
                    isWatch:true,
                    userAdmin:false,
                    username:"harry Poter",
                    userPhoto:"/dataImage/user/profil1.jpg",
                },
                {
                    content:'test de contenu qui est bien gerer par le dev',
                    date : "22/02/23 ",
                    time : "07:23",
                    isWatch:true,
                    userAdmin:true,
                    username:"Adminer",
                    userPhoto:"/dataImage/user/profil1.jpg",
                },
                {
                    content:'test de contenu lorem',
                    date : "22/02/23 ",
                    time : "07:23",
                    isWatch:true,
                    userAdmin:true,
                    username:"Adminer",
                    userPhoto:"/dataImage/user/profil1.jpg",
                },
                {
                    content:'test de contenu',
                    date : "22/02/23 ",
                    time : "07:23",
                    isWatch:true,
                    userAdmin:false,
                    username:"harry Poter",
                    userPhoto:"/dataImage/user/profil1.jpg",
                },
                {
                    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga pariatur repellat eaque, nemo ad assumenda distinctio voluptatibus est obcaecati, recusandae illo nulla totam dolore iure odio! Accusantium corporis quam dicta impedit deleniti possimus explicabo.',
                    date : "22/02/23 ",
                    time : "07:23",
                    isWatch:true,
                    userAdmin:false,
                    username:"harry Poter",
                    userPhoto:"/dataImage/user/profil1.jpg",
                },
                {
                    content:'test de contenu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga pariatur repellat eaque',
                    date : "22/02/23 ",
                    time : "07:23",
                    isWatch:true,
                    userAdmin:false,
                    username:"harry Poter",
                    userPhoto:"/dataImage/user/profil1.jpg",
                },

            ]
        }
    },
    data(){
        return{

        }
    },
    methods:{
        getClass(isAdmin:boolean){
           let classe=" d-flex my-2"
            classe = (isAdmin)? `${classe} messageAdmin`:`${classe} messageUser`
            return classe
        },
        printContent(text:String ){
            return text;
        }
    }


})
</script >

<style scoped lang="scss">
p{
    margin-bottom: 0;
}
.username{
    font-size: 1.3rem;
}
.content{
    font-size: 1.2rem;
}
.hour{
    text-align: end;
}
.messageContenu{
    max-width: 60%;
}

.messageUser .messageStyle{
    background: var(--greyD);
    border-radius: 20px;
    position:relative;
    z-index:1;
}
.messageAdmin{
    flex-direction: row-reverse;
    .messageStyle{
        background: var(--greyD);
        border-radius: 20px;
        position:relative;
        z-index:1;
        flex-direction: row-reverse;
    }
    .messageStyle::before{
        position:absolute;
        border:solid 15px;
        padding-top: none;
        content:" ";
        width:0px;
        height:0px;
        bottom:5px;
        right:-22px;
        border-top: solid 15px white;
        border-left: solid 15px transparent;
        border-bottom: solid 15px transparent;
        border-right: solid 15px white;
        border-top-left-radius: 22px;
        background: var(--greyD);
        transform: rotate('20');
        z-index: -1;
    }
}
.messageUser .messageStyle::before{
    position:absolute;
    border:solid 15px;
    padding-top: none;
    content:" ";
    width:0px;
    height:0px;
    bottom:5px;
    left:-22px;
    border-top: solid 15px white;
    border-left: solid 15px white;
    border-bottom: solid 15px transparent;
    border-right: solid 15px transparent;
    border-top-right-radius: 22px;
    background: var(--greyD);
    transform: rotate('20');
    z-index: -1;
}
.sendBox{
    border-radius: 5px;
    background: var(--grey);
    height: 50px;
    box-shadow: 6px 5px 4px 0.2px  var(--greyD);
    button{
        background: var(--blue);
        color:var(--white);
        border-radius: 10px;
        width: 80px;
    }
    input{
        /* background: var(--blue); */
        /* color:var(--white); */
        border-radius: 10px;
        border:none;
        background: var(--grey);

    }
}
</style>
