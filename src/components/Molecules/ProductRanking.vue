<template>
    <div class="w-100   d-flex align-items-center">
        <apexchart type="pie"   :options="chartOptions" :series="series" class="w-100"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default{
    name: 'ProductRanking',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series:[44,55,13,43,22],
            chartOptions:{
                chart:{
                    width:'100%',
                    type:'pie',
                },
                labels :['peperoni','margarita','frommage','italian','special'],
                responsive: [{
                    breakpoint: 280 ,
                    options: {
                        chart : {
                            width: 200
                        },
                        legend : {
                            position : 'bottom'
                        }
                    }
                }]
            }
        }

    }
}
</script>
