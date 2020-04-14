<template>
  <div id="app">
    <Navbar />
    <Seclist />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Seclist from '@/components/Seclist.vue'
export default {
  components: {
    Navbar,
    Seclist
  }
}
</script>

<style lang="less" rel="stylesheet/less">
* {
  margin: 0;
  padding: 0;
}
</style>
