<script lang="ts">
import { defineComponent } from 'vue'
import ponctualStatBoard from "../components/Molecules/ponctualStatBoard.vue"
import revenue from '@/components/Molecules/Revenue.vue'
import activity from '@/components/Molecules/Activity.vue'
import historiques from '@/components/Molecules/HistoriqueCells.vue'
import productRanking from '@/components/Molecules/ProductRanking.vue'
export default defineComponent({
  name:'home',
  components:{ponctualStatBoard,revenue,activity,historiques,productRanking}
})
</script>

<template>
  <div id="home" class="border border-dark">
    <div class=" d-flex align-items-center">
      <h1 class="m-0">Welcome to dashboard</h1>
    </div>
    <div class="mb-3 mx-3  ">
      <ponctualStatBoard />
    </div>
    <div class="mb-3 mx-3  grid1">
      <div class="revenue componentCard">
        <revenue />
      </div>
      <div class="activity componentCard">
        <activity />
      </div>
    </div>
    <div class="grid2 mx-3">
      <div class="componentCard oscroll">
        <historiques />
      </div>
      <div class="componentCard">
        <productRanking />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home{
  height: calc(100vh - 60px) !important;
  // border: solid 5px red !important;
  // overflow: hidden;
  display:grid;
  grid-template-rows:60px 105px 480px 1fr;
  .oscroll{
    overflow: scroll;
  }
  .grid1{
    display: grid;
    grid-template-columns: 450px 1fr;
    gap: 12px;
  }
  .grid2{
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 12px;
  }
}
</style>
