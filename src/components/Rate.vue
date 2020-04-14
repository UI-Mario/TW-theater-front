<template>
  <div class="rate">
    <el-rate
      v-model="rating"
      disabled
      allow-half
    >
    </el-rate>
    <span class="rateNum">{{rating*2}}</span>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: ['rating']
}
</script>

<style lang="less" rel="stylesheet/less">
  .el-rate {
    display: inline-block;
    .el-rate__item {
      transform: scale(1.2);
      display: inline-block;
      vertical-align: middle;
      .el-rate__icon {
        font-size: 13px;
        margin: 0px;
      }
    }
  }
.rateNum {
  display: inline-block;
  margin-left: 5px;
  color: #e09015;
  font-size: 12px;
  vertical-align: middle;
}
</style>
