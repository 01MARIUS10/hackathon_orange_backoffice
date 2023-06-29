<template>

    <div class="card" >
        <div class="image  d-flex align-items-center justify-content-center w-100 " :style="getGradienStyle()">
            <div class="img d-flex align-items-center justify-content-center">
                <div class="img-c d-flex justify-content-center align-items-center" :style="getGradienStyle()">
                    <img :src="urlRoot+product.image" alt="Product" class="">
                </div>
            </div>
            <div class="style"></div>
            <div class="style2"></div>
        </div>
        <div class="virtualContent">
            <div class="content w-100 d-flex flex-column justify-content-between" >
                <div class="name">
                    <h2 class="text-center">{{ product.name }}</h2>
                </div>
                <div class="texte mb-1 px-4">
                    <p class="mb-0">
                        <b>Ingredient: </b> tomates, de mozzarella et de basilic
                    </p>
                </div>
                <div class="reaction m-2 d-flex justify-content-center">
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"card",
    props:{
        gradien:{
            type:Array,
            default:['#F3904F','#3B4371'],
        },
        product:{
            id:0,
            name:"Margherita",
            caracteristique:{
                size:"xxl"
            },
            price:"30.000ar",
            image:"/dataImage/product/pizzaTest.jpg",
        },
    },
    methods: {
        getGradienStyle(gradien){
            return `background: linear-gradient(to bottom left ,${this.gradien[0]},${this.gradien[1]}`;
        }
    },
    data(){
        return{
            urlRoot:"http://localhost:8000",
        }
    }
}
</script>

<style scoped lang="scss">


.card{
    width:var(--wcard);
    height: calc(var(--wcard) * 1.6);
    margin:10px;
    border-radius: 20px;
    overflow: hidden;
    /* border:solid 2px darkblue; */
    .image{
        position: relative;
        width:var(--wcard);
        height:calc(var(--wcard) + 20px);
        .img .img-c{
            top:15px;
            bottom:15px;
            right:0;
            left:0;
            position:absolute;
            transform:translate(0,-15px);
            border-radius: 30px;
            z-index:3;
        }
        .style{
            position:absolute;
            content:"";
            width:100%;
            height: 30px;
            bottom:0;
            border-top-right-radius: 30px;
            background: var(--third);

        }
        .style2{
            position:absolute;
            content:"";
            width:30px;
            height: 30px;
            bottom:30px;
            left:0;
            border-top-right-radius: 100%;
            background: var(--third);

        }
        img{
            width:75%;
            height:auto;
            border-radius: 20px;
        }
    }
    .image::before{
        position:absolute;
        content:"";
        width:30px;
        height: 30px;
        bottom:30px;
        left:0;
        border-bottom-left-radius: 100%;
        border-top-right-radius: 100%;
        /* background: #250C25; */
        z-index:2

    }
    .image::after{
        position:absolute;
        content:"";
        width:30px;
        height: 30px;
        bottom:0;
        right:0;
        border-top-right-radius: 30px;

        background: var(--third);

    }
    .virtualContent{
        height: calc(var(--wcard) * 0.6);
        position:relative;
        background: var(--third);

        .content{
            height: calc(var(--wcard) * 0.6);
            position:absolute;
            transform: translate(0 , -30px );

            .texte{
                height: 60%;
                font-family:var(--font-family-primary) ;
                font-size: 1.1rem;
            }
            .reaction{
                height: 40px;
                button{
                    background: var(--primary);
                    color:white;
                    font-size:1.3rem;
                    padding: 3px  20px;
                    border-radius: 5px;
                }
            }
            .name{
                height: 40px;
                margin-bottom: 5px;
                margin-top: 11px;
                h2{
                    color: linear-gradient(to bottom left ,var(--primary),var(--secondary));
                    font-weight:bold ;
                    font-family:var(--font-family-primary) ;
                    // font-size:var(--font-size-primary);
                }
            }
        }
    }

}

</style>
