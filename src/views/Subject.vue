<template>
  <div class="subject" v-loading="loading">
    <p class="title">
      {{ movie.title }}
      <span v-if="movie.title !== movie.original_title">{{
        movie.original_title
      }}</span>
      <span class="year">({{ movie.year.substr(0,4) }})</span>
    </p>
    <div class="info">
      <div class="img-contain">
        <img :src="movie.images" alt />
      </div>
      <div class="movie-info">
        <p>
          导演：
          <span
            v-for="(item, index) in directorArray"
            :key="'director' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          编剧：
          <span v-for="(item, index) in writerArray" :key="'writer' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          主演：
          <span v-for="(item, index) in castArray" :key="'cast' + index"
            >{{ item}} / </span
          >
        </p>
        <p>
          类型：
          <span v-for="(item, index) in genresArray" :key="'genre' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          制片国家/地区：
          <span
            v-for="(item, index) in countriesAray"
            :key="'country' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          语言：
          <span v-for="(item, index) in languagesArray" :key="'lan' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          上映日期：
          <span v-for="(item, index) in pubdatesArray" :key="'pub' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          片长：
          <span
            v-for="(item, index) in durationsArray"
            :key="'duration' + index"
            >{{ item }} / </span
          >
        </p>
        <p>
          又名：
          <span
            v-for="(item, index) in akaArray"
            :key="'aka' + index"
            >{{ item }} / </span
          >
        </p>
      </div>
      <div class="movie-rate">
        <p>豆瓣评分</p>
        <div class="rate-contain">
          <div class="left">
            <span>{{ movie.rating }}</span>
          </div>
          <div class="right">
            <div>
              <Rate :rating="movie.rating / 2" />
              <span>{{ movie.ratingCount }}人评价</span>
            </div>
          </div>
        </div>
        ???
        <el-progress
          color="#FFD596"
          :text-inside="true"
          :stroke-width="14"
          :percentage="70"
        ></el-progress
        >???
        <el-progress
          color="#FFD596"
          :text-inside="true"
          :stroke-width="14"
          :percentage="70"
        ></el-progress
        >???
        <el-progress
          color="#FFD596"
          :text-inside="true"
          :stroke-width="14"
          :percentage="70"
        ></el-progress>
      </div>
    </div>
    <div class="insterest">
      <a href>
        <button>想看</button>
      </a>
      <a href>
        <button>看过</button>
      </a>
      <span>评价:</span>
      <el-rate show-text></el-rate>
    </div>
    <div class="gtleft">
      <ul class="ul">
        <li>
          <img
            src="https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif"
            alt
          />
          <a href>写短评</a>
        </li>
        <li>
          <img
            src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif"
            alt
          />
          <a href>写影评</a>
        </li>
        <li>
          <img
            src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif"
            alt
          />
          <a href>提问题</a>
        </li>
      </ul>
    </div>
    <div class="summary">
      <h2>{{ movie.title }}的剧情简介· · · · · ·</h2>
      <p>{{ movie.summary }}</p>
    </div>
    <div class="similar-movie">
      <h2>喜欢这部电影的人也喜欢 · · · · · ·</h2>
      <MovieList :movielist="similarMovie" />
    </div>
    <div class="comments-section">
      <h2>{{ movie.title }}的短评· · · · · ·</h2>
      <div
        class="comment-contain"
        v-for="(item, index) in popularComments"
        :key="index"
      >
        <div class="top">
          <img
            :src="item.avatar"
            alt=""
            slot="reference"
            referrerpolicy ="never"
          />
          <span>{{ item.authorName }}</span>
          <Rate :rating="item.rating" />
        </div>
        <span>{{ item.review }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieById, getSimilarMovie, getCommentsByMovieId } from '@/network/request'

import Rate from '@/components/Rate.vue'
import MovieList from '@/components/MovieList.vue'

export default {
  name: 'subject',
  components: {
    Rate,
    MovieList
  },
  data () {
    return {
      movie: [],
      similarMovie: [],
      loading: false,
      popularComments: []
    }
  },
  created () {
    getMovieById(this.$route.params.id).then(res => {
      this.movie = res.data
      this.writerArray = this.movie.writers.split(',')
      this.directorArray = this.movie.director.split(',')
      this.castArray = this.movie.cast.split(',')
      this.genresArray = this.movie.genres.split(',')
      this.countriesAray = this.movie.countries.split(',')
      this.languagesArray = this.movie.languages.split(',')
      this.pubdatesArray = this.movie.pubdates.split(',')
      this.durationsArray = this.movie.durations.split(',')
      this.akaArray = this.movie.aka.split(',')
      console.log(res.data)
      this.loading = false
    })
    getSimilarMovie(this.$route.params.id).then(res => {
      this.similarMovie = res.data
      console.log(res.data)
      this.loading = false
    })
    getCommentsByMovieId(this.$route.params.id).then(res => {
      this.popularComments = res.data
      this.loading = false
    })
  },
  mounted () {
    this.loading = true
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.subject {
  width: 675px;
  margin-left: 135px;
  .title {
    font-size: 26px;
    color: #494949;
    margin: 30px 0 15px 0;
    .year {
      color: #888888;
    }
  }
  .info {
    // background-color: #007722;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    .img-contain {
      width: 135px;
      height: 200px;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    .movie-info {
      width: 333px;
      border-right: 1px solid #dddddd;
      padding-right: 10px;
      p {
        font-size: 13px;
        color: #666666;
      }
      span {
        color: #3377aa;
      }
    }
    .movie-rate {
      padding-left: 15px;
      p {
        font-size: 12px;
        color: #9b9b9b;
      }
      .rate-contain {
        height: 60px;
        display: flex;
        flex-direction: row;
        .left {
          display: flex;
          // justify-content: center;
          align-items: center;
        }
        .left span {
          font-size: 28px;
          color: #494949;
          margin-right: 15px;
        }
        .right {
          display: flex;
          align-items: center;
        }
        .right span {
          font-size: 12px;
          color: #3377aa;
        }
      }
    }
  }
  .insterest {
    height: 50px;
    display: flex;
    // justify-content: center;
    align-items: center;
    // background-color: #007722;
    button {
      width: 50px;
      height: 20px;
      background: #fae9da;
      border: 1px solid #ca6445;
      color: #333;
      border-radius: 5px;
      margin: 5px;
    }
  }
  .gtleft {
    margin-bottom: 30px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
    }
    a {
      font-size: 13px;
      color: #3377aa;
      margin: 5px;
      text-decoration: none;
    }
  }
  .summary {
    h2 {
      font-size: 16px;
      color: #007722;
      margin-bottom: 15px;
    }
    p {
      font-size: 13px;
      color: #111111;
      text-indent: 26px;
    }
  }
  .similar-movie {
    h2 {
      font-size: 16px;
      color: #007722;
      margin-bottom: 15px;
      margin-top: 15px;
    }
    p {
      font-size: 13px;
      color: #111111;
      text-indent: 26px;
    }
  }
  .comments-section {
    margin-bottom: 20px;
    h2 {
      font-size: 16px;
      color: #007722;
      margin: 20px 0 15px 0;
    }
    .comment-contain {
      width: 100%;
      border-top: 1px solid #dbdbdb;
      padding-top: 10px;
      margin-top: 10px;
      .top {
        display: flex;
        flex-direction: row;
        // margin-bottom: 10px;
        // justify-content: center;
        img {
          border-radius: 50%;
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        span {
          margin-right: 10px;
          font-size: 13px;
          color: #3377aa;
        }
      }
      span {
        font-size: 13px;
        color: #494949;
      }
    }
  }
}
</style>
