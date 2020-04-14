<template>
  <div class="chart" v-loading="loading">
    <h1>豆瓣电影排行榜</h1>
    <h2>豆瓣新片榜 · · · · · ·</h2>
    <div
      v-for="(item, index) in newmovielist"
      :key="index"
    >
      <div class="hr"></div>
      <div class="indent">
        <router-link :to="'/subject/'+item.id">
          <div class="img-contain">
            <img
              :src="item.images"
              alt=""
            >
          </div>
        </router-link>
        <div class="indent-right">
          <a href="" v-if="item.title !== item.originalTitle">{{item.title}}/{{item.originalTitle}}</a>
          <a href="" v-else>{{item.title}}</a>
          <br>
          <span>
            {{item.pubdates}}/
          </span>
          <span>
            {{item.director}}/
          </span>
          <span>
            {{item.cast}}/
          </span>
          <span>
            {{item.genres}}/
          </span>
          <Rate :rating="item.rating|calc2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate.vue'
import { getNewMovies, testsearch } from '@/network/request'

export default {
  name: 'chart',
  components: { Rate },
  data () {
    return {
      newmovielist: [],
      loading: false
    }
  },
  filters: {
    calc2: function (value) {
      return value / 2
    }
  },
  created () {
    getNewMovies().then(res => {
      this.newmovielist = res.data
      this.loading = false
    })
    testsearch().then(res => {
      console.log('this is test')
      console.log(res)
    })
  },
  mounted () {
    this.loading = false
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.chart {
  width: 675px;
  margin-left: 135px;
  h1 {
    color: #494949;
    font-size: 26px;
    margin-top: 30px;
  }
  h2 {
    font-size: 16px;
    color: #007722;
    margin-top: 10px;
  }
  .hr {
    width: 100%;
    height: 20px;
    border-bottom: 1px dashed #dddddd;
  }
  .indent {
    display: flex;
    flex-direction: row;
    padding: 10px 0 10px 0;
    .img-contain {
      width: 75px;
      height: 112px;
      overflow: hidden;
      img {
        width: 100%;
      }
      img:hover {
        transform: scale(1.5, 1.5);
        transition: all 2s;
      }
    }
    .indent-right {
      margin-left: 25px;
      a {
        font-size: 14px;
        color: #3377aa;
        text-decoration: none;
      }
      span {
        color: #666666;
        font-size: 13px;
      }
    }
  }
}
</style>
