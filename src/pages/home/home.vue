<template>
  <div>
    <div class="header">
      <home-header ref="header"></home-header>
      <swiper ref="swiper"></swiper>
      <icons ref="icons"></icons>
      <recomond ref="recommond"></recomond>
      <weekend ref="weekend"></weekend>
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import Swiper from './components/swiper'
import Icons from './components/icons'
import Recomond from './components/recomond'
import Weekend from './components/weekend'
import axios from 'axios'
export default {
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Recomond,
    Weekend
  },
  data() {
    return {
    }
  },
  methods: {
    getHomeInfo() {
      // axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      console.log(res)
      // 父传子
      this.$refs['swiper'].swiperList = res.data.data.swiperList
      this.$refs['icons'].iconsList = res.data.data.iconList
console.log(this.$refs['icons'].iconsList)
      this.$refs['recommond'].recommendList = res.data.data.recommendList
     // console.log(this.$refs['recommond'].recommendList)
      this.$refs['weekend'].weekendList = res.data.data.weekendList
      //console.log(this.$refs['weekend'].weekendList)
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
<style>
.header {
  /* background-color:blue; */
  line-height: 1.2rem;
  margin-left: 0;
}
</style>
