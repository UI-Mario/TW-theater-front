<template>
  <div class="douban-header">
    <div class="top">
      <div class="left">
        <span
          v-for="(item, index) in toplist"
          :key="index"
        >{{ item.title }}</span>
      </div>
      <div class="right">
        <span>下载手机客户端 </span>
        <span>登录/注册 </span>
      </div>
    </div>
    <div class="douban-container">
      <router-link to="/">
          <span>豆瓣电影</span>
      </router-link>
      <input placeholder="电影、影人、影院、电视剧" ref="searchInput">
      <div @click="saveText()" class="search-btn">
        <!-- <router-link :to="{ name: 'search', params: { text: text }}" class="search-btn"> -->
          <img src="https://s2.ax1x.com/2020/01/17/lzAWfH.png" alt="">
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { search } from '@/network/request'

export default {
  data () {
    return {
      content: '',
      title: '正在热映',
      toplist: [
        {
          title: '豆瓣',
          url: '/'
        },
        {
          title: '读书',
          url: '/'
        },
        {
          title: '电影',
          url: '/'
        },
        {
          title: '音乐',
          url: '/'
        },
        {
          title: '同城',
          url: '/'
        },
        {
          title: '小组',
          url: '/'
        },
        {
          title: '阅读',
          url: '/'
        },
        {
          title: 'FM',
          url: '/'
        },
        {
          title: '时间',
          url: '/'
        },
        {
          title: '豆品',
          url: '/'
        },
        {
          title: '更多',
          url: '/'
        }
      ],
      bottomlist: [
        {
          title: '影讯&购票',
          url: '/'
        },
        {
          title: '选电影',
          url: '/'
        },
        {
          title: '电视剧',
          url: '/'
        },
        {
          title: '排行榜',
          url: '/'
        },
        {
          title: '分类',
          url: '/'
        },
        {
          title: '影评',
          url: '/'
        }
      ],
      text: ''
    }
  },
  methods: {
    saveText: function () {
      this.text = this.$refs.searchInput.value
      // console.log(this.$refs.searchInput.value)
      this.$router.push({
        name: 'search',
        params: {
          text: this.text
        }
      })
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
@import '../assets/style/color';
.douban-header {
  background: @mainColor;
}
.top {
  background-color: #545652;
  height: 28px;
  color: #d5d5d5;
  font-size: 12px;
  .left,
  .right {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
  .left {
    float: left;
    width: 40%;
  }
  .right {
    width: 15%;
    float: right;
  }
}
.douban-container {
  border-bottom: 1px solid #e5ebe4;
  height: 76px;
  display: flex;
  align-items: center;
  .router-link-active {
    text-decoration: none;
  }
  span {
    color: #27a;
    font: 30px Helvetica, Arial, sans-serif;
    margin-left: 135px;
    margin-right: 40px;
  }
  input {
    width: 460px;
    height: 34px;
    padding-left: 12px;
    border: 0;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.16);
    outline: none;
  }
  .search-btn {
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    // background: rebeccapurple;
    background-color: #8a8a8a;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.16);
    cursor: pointer;
    img {
      width: 40%;
      height: 40%;
    }
  }
}
</style>
