<template>
    <div class="w-100 h-100">
        <div class="">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Nom du produit</th>
                    <th>Date</th>
                    <th>Prix</th>
                    <th>client</th>
                    <th>avis client</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="achat in Achats_">
                    <td>{{ achat.nom }}</td>
                    <td>
                        <div class="mb-0 d-flex align-items-center">
                            <p class="mb-0 d-flex align-items-center" style="width:140px;">
                                <span class="material-symbols-outlined">calendar_month</span>
                                <span class="mx-1">{{ achat.date }}  </span></p>
                            <p class="mb-0 d-flex align-items-center" style="width:140px;">
                                <span class="material-symbols-outlined">schedule</span>
                                <span  class="mx-1">{{ achat.heure }} </span>
                            </p>

                        </div>
                    </td>

                    <td>{{ achat.prix }}</td>
                    <td>{{ achat.pseudo }}</td>
                    <td class="progressBar">
                        <ProgressBar :fillPercentage="achat.note" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProgressBar from '../Cellules/progressBar.vue'
export default defineComponent({
    name:'HistoriqueCells',
    components:{ProgressBar},
    data(){
        return{

        }
    },
    props:{
        Achats_:{
            type: Array,
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
    mounted(){
        console.log(this.Achats_)
    }
})
</script>
