<template>
  <div class="container">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNav from '@/components/AppNav.vue'
export default {
  name: 'app',
  components: {
    AppNav
  }
}
</script>
