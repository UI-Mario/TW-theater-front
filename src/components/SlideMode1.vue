<template>
  <div class="contain" v-loading="loading">
    <div class="control">
      <h2>正在热映</h2>
      <a href="">全部正在热映»</a>
      <a href="">即将上映»</a>
      <div class="right">
        <span>{{page}}/{{totalpage}}</span>
        <div class="img-contain">
          <img
            src="https://s2.ax1x.com/2020/01/11/l5RqKO.png"
            alt=""
            @click="slideleft()"
          >
        </div>
        <div class="img-contain">
          <img
            src="https://s2.ax1x.com/2020/01/11/l5RoP1.png"
            alt=""
            @click="slideright()"
          >
        </div>
      </div>
    </div>
    <div class="slide" ref="slide">
      <div
        v-for="(movie, index) in movielist"
        :key="index"
        class="slideItem"
      >
        <Slideitem
          :movieitem="movie"
          :rating="movie.rating/2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slideitem from '@/components/SlideItem.vue'
import { getAllNowMovie } from '@/network/request'

export default {
  name: 'slidemode1',
  components: {
    Slideitem
  },
  data () {
    return {
      page: 1,
      totalpage: 2,
      loading: true,
      movielist: []
    }
  },
  methods: {
    slideleft: function () {
      if (this.page > 1) {
        // console.log(this.$refs.slide)
        let temp = (this.page - 2) * (-675)
        this.$refs.slide.setAttribute('style', `left: ${temp}px`)
        // this.$refs.slideleft.setAttribute(`style', 'left: calc(${page})`)
        this.page--
      }
    },
    slideright: function () {
      if (this.page < 2) {
        // console.log(this.$refs.slide)
        let temp = this.page * (-675)
        this.$refs.slide.setAttribute('style', `left: ${temp}px`)
        // this.$refs.slideleft.setAttribute(`style', 'left: calc(${page})`)
        this.page++
      }
    }
  },
  mounted () {
    this.loading = true
  },
  created () {
    getAllNowMovie().then(res => {
      console.log('this is getallnowmovie')
      console.log(res.data)
      this.movielist = res.data
      this.loading = false
    })
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.contain {
  width: 675px;
  height: 324px;
  // background-color: coral;
  position: relative;
  margin-top: 20px;
  overflow: hidden;
  .control {
    height: 36px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 18px;
    border-bottom: 1px solid #dbdbdb;
    // background-color: #37a;
    h2 {
      font-size: 16px;
      // display: inline;
    }
    a {
      text-decoration: none;
      font-size: 13px;
      color: #666699;
      margin-left: 15px;
    }
    a:hover {
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
        color: #666666;
      }
      .img-contain {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #37a;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
  .slide {
    position: absolute;
    left: 0;
    transition: left 1s;
    height: 270px;
    width: calc(675px * 2);
    // overflow: hidden;
    // background-color: burlywood;
    .slideItem {
      float: left;
    }
  }
}
</style>
