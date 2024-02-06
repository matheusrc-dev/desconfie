<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarComponent />
      <MainComponent />
    </div>
  </div>
</template>

<script>
import MainComponent from '@/components/dashboard/MainComponent.vue';
import SidebarComponent from '@/components/dashboard/SidebarComponent.vue'

export default {
  name: 'DashboardView',
  components: { SidebarComponent, MainComponent }
}
</script>
