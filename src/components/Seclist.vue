<template>
  <div class="nav-secondary">
    <div class="nav-sec-list">
      <router-link to="/cinema">影讯&购票</router-link>
      <router-link to="/explore">选电影</router-link>
      <router-link to="/cinema">电视剧</router-link>
      <router-link to="/chart">排行榜</router-link>
      <router-link to="/tag">分类</router-link>
      <router-link to="/review">影评</router-link>
      <a
        href="https://movie.douban.com/annual/2019?source=navigation"
        target="_blank"
      >2019年度榜单</a>
      <a
        href="https://m.douban.com/standbyme/annual2019?source=navigation"
        target="_blank"
      >2019书影音报告</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../assets/style/color';
.nav-secondary {
  background: @mainColor;
  height: 40px;
  display: flex;
  align-items: center;
  .nav-sec-list {
    width: 50%;
    height: 40px;
    margin-left: 135px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  router-link,
  a {
    text-decoration: none;
    color: #37a;
  }
  router-link,
  a:hover {
    color: #fff;
    background-color: #37a;
  }
}
</style>
