<template>
    <div v-if="isAdd">
        <productAdd :product="productModify"/>
        <button @click="goToListProduct()"> list products</button>
    </div>
    <div v-else class="">
        <button @click="goToaddProduct()"> add products</button>
        <productList :products="products" />
    </div>
</template>

<script lang="ts">
import productAdd from "../components/Molecules/products/ProductAdd.vue"
import productList from "../components/Molecules/products/ProductLists.vue"
import { defineComponent } from "vue"
export default defineComponent({
    name:"products",
    components:{ productAdd , productList},
    props:{
        products:{
            type:Array,
            default:[
                    {nom:"Peperoni",date:"10 mars 2022",heure:"08:23",prix:"25$",pseudo:"Toto",note:28},
                    {nom:"Peperoni",date:"1 aout 2022",heure:"08:23" ,prix:"34$",pseudo:"nuell",note:41},
                    {nom:"Peperoni",date:"12 juin 2022",heure:"08:23",prix:"65$",pseudo:"Alexander",note:42},
                    {nom:"Peperoni",date:"10 sept 2022",heure:"08:23",prix:"16$",pseudo:"VanDel",note:68},
                    {nom:"Peperoni",date:"10 sept 2022",heure:"08:23",prix:"86$",pseudo:"Keras",note:32},
                    {nom:"Peperoni",date:"1 aout 2022",heure:"08:23" ,prix:"34$",pseudo:"nuell",note:41},
                    {nom:"Peperoni",date:"12 juin 2022",heure:"08:23",prix:"65$",pseudo:"Alexander",note:42},
                    {nom:"Peperoni",date:"10 sept 2022",heure:"08:23",prix:"16$",pseudo:"VanDel",note:68},
                    {nom:"Peperoni",date:"10 sept 2022",heure:"08:23",prix:"86$",pseudo:"Keras",note:32},
                    {nom:"Peperoni",date:"1 aout 2022",heure:"08:23" ,prix:"34$",pseudo:"nuell",note:41},
                    {nom:"Peperoni",date:"12 juin 2022",heure:"08:23",prix:"65$",pseudo:"Alexander",note:42},
                    {nom:"Peperoni",date:"10 sept 2022",heure:"08:23",prix:"16$",pseudo:"VanDel",note:68},
                    {nom:"Peperoni",date:"10 sept 2022",heure:"08:23",prix:"86$",pseudo:"Keras",note:32},

                ]
        }

    },
    data(){
        return {
            isAdd:false,
            productModify:{}
        }
    },
    methods: {
        initProductModify(){
            this.productModify = {
                id:null,
                image:"/images/imgTemplate.jpg",
                name:'',
                categorie:'',
                price:'',
                size:''
            }
        },
        goToaddProduct(){
            this.isAdd = ! this.isAdd
        },
        goToListProduct(){
            this.isAdd = ! this.isAdd
        }
    },

    mounted(){
        // this.goToaddProduct()
        this.initProductModify()
        console.log(this.products)
    }
})
</script>
