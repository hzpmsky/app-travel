<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <div class="item" v-for="item of weekendList" :key="item.id">
      <img class="item-img" :src="item.url" alt="">
      <div>
        <p class="item-tag">{{item.tag}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import ImgUrl from '../../../assets/weekend.jpg'
export default {
  name: 'HomeWeekwed',
  data() {
    return {
      imgUrl: ImgUrl,
      weekendList: [{
        id: '001',
        url: ImgUrl,
        tag: '杭州必游TOP10',
        desc: '爱上杭州的碧水蓝天'
      },
      {
        id: '002',
        url: ImgUrl,
        tag: '温泉有水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      },
      {
        id: '003',
        url: ImgUrl,
        tag: '广州长隆野生动物世界',
        desc: '中国最具国际标准的国家级野生动物园'
      },
      {
        id: '004',
        url: ImgUrl,
        tag: '珠江夜游',
        desc: '相伴更多，欢乐更多，无与伦比'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.weekend-title {
  line-height: 2.5rem;
  background: rgba(96, 96, 96, 0.15);
  text-align: left;
}
.item {
margin-top:1rem;
  .item-img {
    width: 100%;
  }
  .item-tag {
    text-align: left;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
  }
  .item-desc {
    text-align: left;
    margin-left: 0.5rem;
    height: 1.25rem;
    overflow: hidden;
    margin-bottom:0;
    margin-top:0.5rem;
  }
}
</style>



