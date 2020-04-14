<template>
  <div class="explore">
    <h1>选影视</h1>
    <div class="categories">
      <div class="categoryRow">
        <div v-for="(value, index) in genres" :key="'genres'+index">
          <div class="category">
            <span ref="genre" @click="getMovieByGenre(value)">{{value}}</span>
          </div>
        </div>
      </div>
      <div class="categoryRow">
        <div v-for="(value, index) in year" :key="'year'+index">
          <div class="category">
            <span ref="year" @click="getMovieByYear(value)">{{value}}</span>
          </div>
        </div>
      </div>
      <div class="categoryRow">
        <div v-for="(value, index) in tags" :key="'tags'+index">
          <div class="category">
            <span ref="tag" @click="getMovieByTag(value)">{{value}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="content" v-loading="loading">
      <div class="top250">
        <MovieList :movielist="top250movielist" />
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

import { getTop250ByCount } from '@/network/request'

export default {
  name: 'tag',
  components: {
    // Slideitem2,
    MovieList
  },
  data () {
    return {
      currentindex: 0, // 0: now, 1: top
      top250movielist: [],
      loading: false,
      top250start: 0,
      count: 20,
      data2top: false,
      selectGenre: '',
      selectYear: '',
      selectTag: '',
      genres: ['全部', '喜剧', '动作', '爱情', '科幻', '动画', '悬疑', '惊悚', '恐怖', '冒险', '灾难'],
      year: ['全部', '2020', '2019', '10年代', '00年代', '90年代'],
      tags: ['全部', '搞笑', '励志', '感人', '青春']
    }
  },
  methods: {
    getMovieByGenre: function (value) {
      // console.log(this.$refs.genre)
      this.selectGenre = value
      for (let i = 0; i < this.$refs.genre.length; i++) {
        this.$refs.genre[i].parentNode.className = 'category'
        if (this.$refs.genre[i].innerText === value) {
          this.$refs.genre[i].parentNode.className = 'category-select'
        }
      }
      if (value === '全部') {
        alert('yes')
      }
      // alert(value)
      // alert('yes')
    },
    getMovieByYear: function (value) {
      this.selectYear = value
      for (let i = 0; i < this.$refs.year.length; i++) {
        this.$refs.year[i].parentNode.className = 'category'
        if (this.$refs.year[i].innerText === value) {
          this.$refs.year[i].parentNode.className = 'category-select'
        }
      }
    },
    getMovieByTag: function (value) {
      this.selectTag = value
      for (let i = 0; i < this.$refs.tag.length; i++) {
        this.$refs.tag[i].parentNode.className = 'category'
        if (this.$refs.tag[i].innerText === value) {
          this.$refs.tag[i].parentNode.className = 'category-select'
        }
      }
    },
    init: function () {
      this.$refs.genre[0].parentNode.className = 'category-select'
      this.$refs.year[0].parentNode.className = 'category-select'
      this.$refs.tag[0].parentNode.className = 'category-select'
    },
    loadMore: function () {
      this.$refs.more.innerText = '加载中'
      this.top250start += this.count
      getTop250ByCount(this.top250start, this.count).then(res => {
        this.top250movielist.push(...res.data)
        this.loading = false
      })
    }
  },
  created () {
    getTop250ByCount(this.top250start, this.count).then(res => {
      this.top250movielist = res.data
      this.loading = false
    })
  },
  mounted () {
    this.loading = true
    this.init()
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
    margin: 30px 0 25px 0;
  }
  .categories {
    width: 100%;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    .categoryRow {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      .category {
        width: 49px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        border-radius: 2px;
        span {
          margin: 0;
          font: 14px Helvetica,Arial,sans-serif;
          color: #333;
          cursor: pointer;
        }
        span:hover {
          color: #258dcd;
        }
      }
      .category-select {
        width: 49px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #258dcd;
        margin-right: 5px;
        border-radius: 2px;
        span {
          margin: 0;
          font: 14px Helvetica,Arial,sans-serif;
          color: #fff;
          cursor: pointer;
        }
      }
    }
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
    margin-bottom: 20px;
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
