<template>
  <div class="contain">
    <div class="control">
      <h2>热门推荐</h2>
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
    <div
      class="gallery"
      ref="gallery"
    >
      <el-carousel indicator-position="outside" autoplay="true" interval="6000">
        <el-carousel-item
          v-for="(item, index) in imgsrclist"
          :key="index"
        >
          <div>
            <!-- <p>{{item.title}}</p> -->
            <img
              :src="item.src"
              alt=""
            >
            <!-- <div class="gallery-hd">
              <h3>{{item.title}}</h3>
              <p>{{item.desc}}</p>
            </div> -->
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      page: 1,
      totalpage: 3,
      imgsrclist: [
        { src: 'https://s2.ax1x.com/2020/01/14/lbvlKP.png', title: 'DC新片《猛禽小队和哈莉·奎茵》中字预告', desc: '猛禽小队全员集结！反派黑面具登场！' },
        {
          src: 'https://s2.ax1x.com/2020/01/14/lbvU8s.jpg',
          title: '《X战警：新变种人》全新预告',
          desc: '《分裂》安雅·泰勒-乔伊、“二丫”麦茜·威廉姆斯、《怪奇物语》查理·希顿主演，画风恐怖暗黑！'
        },
        { src: 'https://s2.ax1x.com/2020/01/14/lbxGsx.png', title: '《西部世界》第三季定档预告', desc: '埃文·蕾切尔·伍德、小粉主演，3月15日HBO播出！' }
      ]
    }
  },
  methods: {
    slideleft: function () {
      console.log('left')
      // if (this.page > 1) {
      //   let temp = (this.page - 2) * (-675)
      //   this.$refs.gallery.setAttribute('style', `left: ${temp}px`)
      //   this.page--
      // }
    },
    slideright: function () {
      console.log('right')
      // if (this.page < 5) {
      //   let temp = this.page * (-675)
      //   this.$refs.gallery.setAttribute('style', `left: ${temp}px`)
      //   this.page++
      // }
    }
  },
  created () {}
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.contain {
  width: 675px;
  height: 293px;
  // background-color: coral;
  position: relative;
  margin-top: 50px;
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
  .gallery {
    width: 100%;
    height: 240px;
    background-color: #666666;
    // .el-carousel__item {
    //   img {
    //     width: 350px;
    //     height: 240px;
    //   }
    //   .gallery-hd {
    //     width: 325px;
    //     height: 240px;
    //     h3 {
    //       color: #111111;
    //       font-size: 18px;
    //     }
    //     p {
    //       color: #999999;
    //       font-size: 13px;
    //     }
    //   }
    // }
  }
}
</style>
