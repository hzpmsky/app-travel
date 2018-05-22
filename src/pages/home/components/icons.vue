<template>
  <div class="icons">
    <div class="icon" v-for="item of iconsList" :key="item.id">
      <div class="icon-img">
        <img :src="item.imgUrl" />
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  data() {
    return {
      iconsList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
       // imgUrl: '../../assets/images/index/icons/icon_01.png',
        title: '断桥'
      },
      {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '苏堤'
      },
      {
        id: '003',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '杨公堤'
      },
      {
        id: '004',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '岳庙'
      },
      {
        id: '005',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '楼外楼'
      },
      {
        id: '006',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '西湖'
      },
      {
        id: '007',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '西溪'
      },
      {
        id: '008',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1805/f1/80f1d63ca01fa937.jpg',
        title: '运河'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.icons {
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

