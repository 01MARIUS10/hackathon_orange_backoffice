<template>
    <div class="d-flex">
        <div class="left w-50 d-flex justify-content-center align-items-center">
            <div class="image w-75 h-75">
                <img @click="this.$refs.inputImage.click()" class="w-100 h-100" :src="image" alt="">
                <input @change="getImageInput" ref="inputImage" type="file" accept="image/*" src="" alt="" hidden>
            </div>
        </div>
        <div class="right w-50 mt-5">
            <div class="form-group mb-3">
                <label for="nom">Nom </label>
                <input type="text" class="form-control" id="nom" placeholder="entrer here his name">
            </div>
            <div class="form-group mb-3">
                <label for="categorie">Categorie</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option></option>
                    </select>
            </div>
            <div class="form-group mb-3">
                <label for="formGroupExampleInput">Ingrediens :</label>
                <div v-for="ingredient in ingredients" class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label" for="gridCheck1">
                    {{ingredient}}
                    </label>
                </div>

            </div>
            <div class="form-group mb-3">
                <label for="formGroupExampleInput">taille possible :</label>
                <div v-for="taille in tailles" class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label" for="gridCheck1">
                    {{ taille }}
                    </label>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"productAdd",
    data(){
        return {

        }
    },
    props:{
        tailles:{
            type:Array,
            default:['PM','M','GM']
        },
        ingredients:{
            type:Array,
            default:['Fromage','Crevette','Peperoni','Champignons']
        },
        product:{
            type: Object,
            default:{
                image:"/images/imgTemplate.jpg",
                name:'',
                categorie:'',
                price:'',
                size:''
            }
        }
    },
    computed:{
        image(){
            return (this.product.image)? this.product.image:"/images/imgTemplate.jpg"
        }
    },
    methods:{
        getImageInput(e){
            let f = e.target.files[0]
            this.image = URL.createObjectURL(f)
        }
    },
    mounted() {
        console.log(this.product)
    },
}
</script>
