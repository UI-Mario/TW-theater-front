<template>
  <div class="contain" v-loading="loading">
    <div class="control">
      <h2 @click="data2new()">最新热门电影</h2>
      <span @click="data2weekly()">口碑榜</span>
      <div class="right">
        <span>更多»</span>
      </div>
    </div>
    <div class="slide" ref="slide">
      <div class="slide-contain" v-if="!data2weekdata">
        <div v-for="(movie, index) in newmovielist" :key="index">
          <Slideitem2 v-if="index < 10" :movieitem="movie"/>
        </div>
      </div>
      <div class="slide-contain" v-else>
        <div v-for="(movie, index) in weekmovielist" :key="index">
          <Slideitem2 v-if="index < 10" :movieitem="movie"/>
        </div>
      </div>
    </div>
    <div class="slide-ctrl">
      <el-pagination
        layout="prev, pager, next"
        :total="50"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Slideitem2 from '@/components/SlideItem2.vue'
import { getNewMovies, getTop250ByCount } from '@/network/request'

export default {
  name: 'slidemode2',
  components: {
    Slideitem2
  },
  data () {
    return {
      page: 1,
      data2weekdata: false,
      movielist: [],
      // start: 1,
      loading: false,
      newmovielist: [],
      weekmovielist: []
    }
  },
  methods: {
    data2weekly: function () {
      console.log(this.weekmovielist)
      this.$nextTick(() => (this.data2weekdata = true))
    },
    data2new: function () {
      this.$nextTick(() => (this.data2weekdata = false))
    }
  },
  mounted () {
    this.loading = true
  },
  created () {
    getNewMovies().then(res => {
      this.newmovielist = res.data
      this.movielist = res.data
      this.loading = false
    })
    getTop250ByCount(0, 10).then(res => {
      this.weekmovielist = res.data
    })
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.contain {
  width: 675px;
  height: 500px;
  // background-color: coral;
  position: relative;
  margin-top: 20px;
  // overflow: hidden;
  .control {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    // background-color: aquamarine;
    margin-bottom: 18px;
    border-bottom: 1px solid #dbdbdb;
    h2 {
      font-size: 16px;
      cursor: pointer;
    }
    span {
      text-decoration: none;
      font-size: 13px;
      color: #666699;
      margin-left: 15px;
      cursor: pointer;
    }
    span:hover {
      color: #fff;
      background-color: #37a;
    }
    .right {
      height: 100%;
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      // background: #fff;
      span {
        // float: right;
        font-size: 12px;
        color: #3377AA;
      }
      span:hover {
        color: #fff;
        background-color: #3377AA;
      }
    }
  }
  .slide {
    width: 675px;
    height: 430px;
    .slide-contain {
      width: 100%;
      height: 100%;
      padding: 5px;
      display: grid;
      grid-template-columns: repeat(5, 115px);
      grid-template-rows: repeat(2, 161px);
      grid-row-gap: 65px;
      grid-column-gap: 22px;
    }
  }
  .slide-ctrl {
    display: flex;
    justify-content: center;
  }
}
</style>
