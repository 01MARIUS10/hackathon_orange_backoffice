<template>
        <div class="myTable">
            <div class="head">
                <p> </p>
                <p> image</p>
                <p> Description</p>
                <p> Categorie</p>
                <p> Caracteristique</p>
                <p> price</p>
                <p> number</p>
                <p> action</p>
            </div>
            <div class="body">
                <div class="my-2 list" v-for="(product,index) in products">
                    <p class="d-flex justify-content-center align-items-center" scope="row">{{ index+1 }}</p>
                    <p class="d-flex justify-content-center align-items-center">
                        <img :src=" product.image" alt="" width=50>
                    </p>
                    <p class="d-flex justify-content-center align-items-center">{{ product.name }}</p>
                    <p class="d-flex justify-content-center align-items-center">{{ product.categorie }}</p>
                    <p class="d-flex justify-content-center align-items-center">{{ product.caracteristique }}</p>
                    <p class="d-flex justify-content-center align-items-center">{{ product.price }}</p>
                    <p class="d-flex justify-content-center align-items-center">{{ product.number }}</p>
                    <div class="action ">
                        <p class="edit"> <img src="/image/icon/pen.png" alt="" width="40" height="40"></p>
                        <p class="delete"> <img src="/image/icon/remove.png" alt="" width="40" height="40"> </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
p{
    margin-bottom:0 ;
}
    .myTable {
        display: grid;
        height: 100%;
        grid-column: 80px 1fr;
        .head,.body .list{
            display: grid;
            grid-template-columns: 50px 120px  1fr  200px 200px 100px 100px 150px;
            grid-gap: 15px;
            p{
                padding:6px 10px;
            }

        }
        .head {
            p{
                background: #554b4b;
                text-align: center;
            }

        }
        .body {
            .list{
                background-color: #fff;
                border-radius:10px ;
                .action{
                    display: flex;
                    justify-content: center;
                }
            }
        }


    }
</style>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name:'ProductLists',
    props:{
        products:{
            type:Array
        }
    }
})
</script>
