<template>
  <div class="explore">
    <h1>选电影</h1>
    <span class="selected" @click="data2nowdata()" ref="shownow">正在上映</span>
    <span @click="data2topdata()" ref="showtop">Top250</span>
    <div class="content" v-loading="loading">
      <div class="nowmovie" v-if="!data2top">
        <MovieList :movielist="nowmovielist" />
        <!-- <div class="movieitem" v-for="(movie, index) in nowmovielist" :key="index">
          <Slideitem2 :movieitem="movie" />
        </div> -->
      </div>
      <div class="top250" v-else>
        <MovieList :movielist="top250movielist" />
        <!-- <div class="movieitem" v-for="(movie, index) in top250movielist" :key="index">
          <Slideitem2 :movieitem="movie" />
        </div> -->
      </div>
    </div>
    <div class="load-more" @click="loadMore()">
      <p ref="more"></p>
    </div>
  </div>
</template>

<script>
// import Slideitem2 from '@/components/SlideItem2.vue'
import MovieList from '@/components/MovieList.vue'

import { getNewMoviesByCount, getTop250ByCount } from '@/network/request'

export default {
  name: 'explore',
  components: {
    // Slideitem2,
    MovieList
  },
  data () {
    return {
      nowmovielist: [],
      currentindex: 0, // 0: now, 1: top
      top250movielist: [],
      loading: false,
      nowstart: 0,
      top250start: 0,
      count: 20,
      data2top: false
    }
  },
  methods: {
    data2nowdata: function () {
      this.currentindex = 0
      this.$refs.shownow.className = 'selected'
      this.$refs.showtop.className = 'temp'
      this.$nextTick(() => (this.data2top = false))
    },
    data2topdata: function () {
      this.currentindex = 1
      this.$refs.shownow.className = 'temp'
      this.$refs.showtop.className = 'selected'
      this.$nextTick(() => (this.data2top = true))
    },
    loadMore: function () {
      this.$refs.more.innerText = '加载中'
      if (this.currentindex === 0) {
        this.nowstart += this.count
        getNewMoviesByCount(this.nowstart, this.count).then(res => {
          this.nowmovielist.push(...res.data)
          console.log(this.nowmovielist)
          this.loading = false
        })
      } else {
        this.top250start += this.count
        getTop250ByCount(this.top250start, this.count).then(res => {
          this.top250movielist.push(...res.data)
          this.loading = false
        })
      }
    }
  },
  created () {
    getNewMoviesByCount(this.nowstart, this.count).then(res => {
      console.log('this is getnowmie')
      // console.log(typeof res.data.subjects)
      this.nowmovielist = res.data
      this.loading = false
      // this.nowstart += 20
    })
    getTop250ByCount(this.top250start, this.count).then(res => {
      // console.log('this is 250movie')
      // console.log(res.data.subjects)
      this.top250movielist = res.data
      this.loading = false
    })
  },
  mounted () {
    this.loading = true
  },
  updated () {
    this.$refs.more.innerText = '加载更多'
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.explore {
  width: 675px;
  margin-left: 135px;
  h1 {
    color: #494949;
    font-size: 26px;
    margin-top: 30px;
  }
  span {
    color: #666666;
    margin: 20px 15px 20px 0;
    cursor: pointer;
  }
  span:hover {
    background-color: #e6e6e6;
  }
  .selected {
    color: #fff;
    background-color: #4b8ccb;
  }
  .selected:hover {
    color: #fff;
    background-color: #4b8ccb;
  }
  .content {
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #dbdbdb;
    // height: 999px;
    // background-color: #494949;
    // .movieitem {
    //   margin-bottom: 15px;
    // }
    // .nowmovie,
    // .top250 {
    //   display: flex;
    //   flex-direction: row;
    //   flex-wrap: wrap;
    //   justify-content: space-between;
    // }
  }
  .load-more {
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;
    cursor: pointer;
    p {
      color: #3377aa;
      font-size: 14px;
    }
  }
  .load-more:hover {
    background-color: #dbdbdb;
  }
}
</style>
