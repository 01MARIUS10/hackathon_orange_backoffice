<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import navbar from '@/components/shared/navbar.vue'
import sidebar from '@/components/shared/sidebar.vue'
export default defineComponent({
  components:{navbar,sidebar,RouterView},
})

</script>

<template>
  <nav style="min-width: 1600px;">
      <navbar />
  </nav>
  <main style="min-width: 1600px;height:calc(100vh - 60px) !important " class="border border-danger">
    <div id="content" class="d-flex w-100 h-100 " >
      <sidebar />
      <div id="main_content"  class="" >
          <RouterView />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main #main_content{
    width : calc(100% - 300px);
    height: calc(100vh - 60px);
    // display: flex;
    // flex-direction: column;
    
}
main{
  background: var(--grey0);
}
</style>

