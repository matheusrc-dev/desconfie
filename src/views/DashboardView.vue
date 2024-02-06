<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'

export default {
  name: 'DashboardView',
  components: { SidebarComponent }
}
</script>
