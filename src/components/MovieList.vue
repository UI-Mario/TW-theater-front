<template>
  <div class="movielist">
    <div class="movieitem" v-for="(movie, index) in movielist" :key="index">
      <Slideitem2 :movieitem="movie" />
    </div>
  </div>
</template>

<script>
import Slideitem2 from '@/components/SlideItem2.vue'

export default {
  name: 'movielist',
  props: ['movielist'],
  components: {
    Slideitem2
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.movielist {
  width: 675px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .movieitem {
    margin-bottom: 15px;
  }
}
</style>
