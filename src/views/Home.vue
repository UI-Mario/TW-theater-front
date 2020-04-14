<template>
  <div class="home">
    <div class="main">
      <SlideMode1 />
      <SlideMode2 />
      <Gallery />
      <p>ToDo</p>
      <p>ToDo</p>
      <p>ToDo</p>
    </div>
    <div class="ad">
      <p>11111111111111111111</p>
    </div>
  </div>
</template>

<script>
import SlideMode1 from '@/components/SlideMode1.vue'
import SlideMode2 from '@/components/SlideMode2.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'home',
  components: {
    SlideMode1,
    SlideMode2,
    Gallery
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.home {
  // background-color: aliceblue;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  .main {
    width: 675px;
    // background-color: blue;
    margin-left: 135px;
  }
  .ad {
    width: 300px;
    margin-left: 60px;
    background-color: blueviolet;
  }
}
</style>
