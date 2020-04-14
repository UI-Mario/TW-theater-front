<template>
  <div class="subject" v-loading="loading">
    <p class="title">
      {{ movie.title }}
      <span v-if="movie.title !== movie.original_title">{{
        movie.original_title
      }}</span>
      <span class="year">({{ movie.year }})</span>
    </p>
    <div class="info">
      <div class="img-contain">
        <img :src="movie.images.medium" alt />
      </div>
      <div class="movie-info">
        <p>
          导演：
          <span
            v-for="(item, index) in movie.directors"
            :key="'director' + index"
            >{{ item.name }}/</span
          >
        </p>
        <p>
          编剧：
          <span v-for="(item, index) in movie.writers" :key="'writer' + index"
            >{{ item.name }}/</span
          >
        </p>
        <p>
          主演：
          <span v-for="(item, index) in movie.casts" :key="'cast' + index"
            >{{ item.name }}/</span
          >
        </p>
        <p>
          类型：
          <span v-for="(item, index) in movie.genres" :key="'genre' + index"
            >{{ item }}/</span
          >
        </p>
        <p>
          制片国家/地区：
          <span
            v-for="(item, index) in movie.countries"
            :key="'country' + index"
            >{{ item }}/</span
          >
        </p>
        <p>
          语言：
          <span v-for="(item, index) in movie.languages" :key="'lan' + index"
            >{{ item }}/</span
          >
        </p>
        <p>
          上映日期：
          <span v-for="(item, index) in movie.pubdates" :key="'pub' + index"
            >{{ item }}/</span
          >
        </p>
        <p>
          片长：
          <span
            v-for="(item, index) in movie.durations"
            :key="'duration' + index"
            >{{ item }}/</span
          >
        </p>
      </div>
      <div class="movie-rate">
        <p>豆瓣评分</p>
        <div class="rate-contain">
          <div class="left">
            <span>{{ movie.rating.average }}</span>
          </div>
          <div class="right">
            <div>
              <Rate :rating="movie.rating.average / 2" />
              <span>{{ movie.ratings_count }}人评价</span>
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
    <div class="celebrities">
      <h2>{{ movie.title }}的演职员· · · · · ·</h2>
      <div class="cele-contain">
        <div
          class="cele-item"
          v-for="(director, index) in movie.directors"
          :key="'director' + index"
        >
          <div class="img-contain">
            <img :src="director.avatars.medium" alt />
          </div>
          <p>{{ director.name }}</p>
        </div>
        <div
          class="cele-item"
          v-for="(cast, index) in movie.casts"
          :key="index"
        >
          <div class="img-contain">
            <img :src="cast.avatars.medium" alt />
          </div>
          <p>{{ cast.name }}</p>
        </div>
      </div>
    </div>
    <div class="comments-section">
      <h2>{{ movie.title }}的短评· · · · · ·</h2>
      <div
        class="comment-contain"
        v-for="(item, index) in movie.popular_comments"
        :key="index"
      >
        <div class="top">
          <span>{{ item.author.name }}</span>
          <Rate :rating="item.rating.value" />
        </div>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieById } from '@/network/request'

import Rate from '@/components/Rate.vue'

export default {
  name: 'subject',
  components: { Rate },
  data () {
    return {
      movie: [],
      loading: false
    }
  },
  created () {
    getMovieById(this.$route.params.id).then(res => {
      this.movie = res.data
      console.log(res.data)
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
  .celebrities {
    h2 {
      font-size: 16px;
      color: #007722;
      margin: 20px 0 15px 0;
    }
    .cele-contain {
      display: flex;
      flex-direction: row;
      width: 100%;
      overflow: scroll;
      height: 181px;
      .cele-item {
        width: 95px;
        text-align: center;
        .img-contain {
          width: 95px;
          height: 115px;
        }
        p {
          font-size: 13px;
          color: #111111;
        }
      }
    }
  }
  .comments-section {
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
