<template>
    <div class=" h-100 d-flex flex-column roundedContent">
        <!-- <p>chats component vuejs</p> -->
        <div class="d-flex justify-content-between p-3" style="flex-grow:1;">
            <div class="chatList h-100 p-2 mr-3" >
                <div class=" d-flex justify-content-center pb-3">
                    <div class="search p-2">
                        <input type="text" name="" id="" class="" placeholder="Search">
                    </div>
                </div>
                <ul class="chatList-list">
                    <li v-for="chatsMini in chatsList" class="d-flex chatListElement  mb-2">
                        <div class="photoChat py-2 pl-2" >
                            <img :src="urlRoot+chatsMini.image" alt="" class=" p-0 w-100 h-100" >
                        </div>
                        <div class="infoChat d-flex flex-column p-3">
                            <p class="d-flex justify-content-between ">
                                <span class="px-2">Harry Potter</span>
                                <span class="px-2">4m</span>
                            </p>
                            <div class="d-flex ">
                                <p class="px-2 d-flex align-items-end">I want to have some value ...</p>
                                <p class=" d-flex align-items-end "><span class="d-flex unseen px-2 justify-content-center align-items-center">5</span></p>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex h-auto p-2  ">
                        <p class="text-center w-100 border border-dark">
                        watch other...</p></li>

                </ul>
            </div>
            <div class="chatContent d-flex flex-column h-100 p-2 ">
                <div class="">
                    <div class="p-4">
                        <h1> welcome to your Office chat</h1>
                    </div>
                </div>
                <div class="chatAllMessage card grow1" >
                    <message />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import message from "../Cellules/message.vue"
export default {
    name:'chats',
    components:{message},
    props:{
        chatsList:{
            type:Array,
            default:[
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },
                {
                    id:1,
                    name:"Harry Potter",
                    image:"/dataImage/user/profil1.jpg",
                    hisChat:{
                        lastMessage:"hello everyone",
                        lastMessageTime:"4m",
                        unsee:3,
                    }
                },


            ]
        },
    },
    data(){
        return {
            user:{
                id:1,
                name:"Harry Potter",
                image:"/dataImage/user/profil1.jpg",
                hisChat:{
                    lastMessage:"hello everyone",
                    lastMessageTime:"4m",
                    unsee:3,
                }
            },
            urlRoot:"http://localhost:8000"
        }
    }
}

</script>

<style scoped lang="scss">
p{
    margin-bottom:0;
}
.chatContent,.grow1{
    flex-grow:1
}
.card{
    border-radius: 10px;
    background: var(--white);
}
.photoChat img{
    border-radius:10px;
}
.unseen{
    background: var(--grey);
    border-radius:50%;
    width:25px;
    height:25px;
    color:black
}
.search{
    background: var(--white);
    border-radius:10px;
    .search input{
        border:none;
        width: 250px;
        height: 28px;
    }
}
.roundedContent{
    /* border-radius: 10px; */
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    /* background:var(--grey); */
    .chatList{
        width:670px;

    }
    .chatListElement{
        height:80px;
        background: var(--white);
        border-radius:10px;
        .photoChat{
            width:80px;
            height: 80px;
        }
        .infoChat,.infoChat>div{
            flex-grow:1;
        }
    }

    .chatListElement:hover {
        background: var(--secondary);
        transform: scale(1.1);
        color:white;
    }

}
</style>
