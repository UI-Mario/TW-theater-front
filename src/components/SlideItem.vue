<template>
  <ul class="slide-item">
    <li class="poster">
      <router-link :to="'/subject/'+movieitem.id">
        <el-popover
          placement="right-start"
          width="250"
          trigger="hover"
        >
          <div>
            <p
              style="font-size: 17px; color: #000; margin-bottom: 10px;"
              v-if="movieitem.title!==movieitem.original_title"
            >
              {{movieitem.title}}{{movieitem.originalTitle}}
            </p>
            <p
              style="font-size: 17px; color: #000; margin-bottom: 10px;"
              v-else
            >
              {{movieitem.title}}
            </p>
            <!-- <el-rate
            v-model="rating"
            disabled
            allow-half
            style="transform: scale(1);display: inline-block;vertical-align: middle;"
          >
          </el-rate>
          <span style="color: #e09015" class="rateNum">{{movieitem.rating.average}}</span> -->
            <Rate :rating="movieitem.rating/2" />
            <p style="font-size: 12px; margin-top: 10px;margin-bottom:10px;">{{movieitem.durations}}</p>
            <span style="font-size: 12px">导演
              <span
                v-for="(item,i) in movieitem.directors"
                :key="i"
              > {{item.name}}</span>
            </span>
            <br>
            <span style="font-size: 12px">主演
              <span> {{movieitem.director}}</span>
            </span>
            <br>

          </div>
          <img
            :src="movieitem.images"
            alt=""
            slot="reference"
          >
        </el-popover>
      </router-link>
    </li>
    <li class="title"><a>{{movieitem.title}}</a></li>
    <li
      class="rating"
      v-if="movieitem.rating!==0"
    >
      <Rate :rating="movieitem.rating/2" />
    </li>
    <li
      class="rating"
      v-else
    >
      <span>暂无评分</span>
    </li>
    <li class="ticket_btn"><span>选座购票</span></li>
  </ul>
</template>

<script>
import Rate from '@/components/Rate.vue'

export default {
  name: 'Slideitem',
  components: { Rate },
  props: ['movieitem', 'rating'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.slide-item {
  width: 115px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  .poster {
    width: 100%;
    height: 161px;
  }
  img {
    width: 100%;
  }
  .title {
    width: 80%;
    // background-color: #E09015;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ticket_btn {
    background-color: #268dcd;
    width: 80%;
    height: 24px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px;
    cursor: pointer;
    span {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
