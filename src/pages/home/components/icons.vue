<template>
  <div class="icons">
    <div class="icon" v-for="item of iconsList" :key="item.id">
      <div class="icon-img">
        <img :src="item.imgUrl" />
        <div class="title">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  data() {
    return {
      iconsList: [
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.icons {
  width:100%;
  margin-top: 0.5rem;
  height: 0;
  padding-bottom: 50%;
  .icon {
    position: relative;
    width: 24%;
    float: left;
    margin-right: 0.21rem;
    padding-bottom: 25%;
    margin-bottom: 13px;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      // padding-bottom: 12px;
      img {
        width: 5.49626rem;
        height: 5rem;
      }
    }
  }
  .title {
    text-align: center;
  }
}
</style>

