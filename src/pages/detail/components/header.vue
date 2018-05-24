<template>
  <div>
    <div class="header" @click="bannerHandleClick">
      <div>
        <img class="header-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      </div>
      <div class="img-title">杭州海洋世界（AAAAA景区）</div>
      <div class="img-info">
        <div class="iconfont img-icon">&#xe67a;</div>
        <div class="img-num">39</div>
      </div>
    </div>
    <common-banner v-show="bannerShow===true" :imgs="imgs" @close="closeBanner"></common-banner>
  </div>
</template>
<script>
import CommonBanner from 'components/banner'
export default {
  name: "DetailHeader",
  components: {
    CommonBanner
  },
  data() {
    return {
      bannerShow: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
    }
  },
  methods: {
    bannerHandleClick() {
      this.bannerShow = true
    },
    closeBanner() {
      this.bannerShow = false
    }
  }

}
</script>
<style lang="less" scoped>
.header-img {
  width: 100%;
  height: 100%;
}
.img-title {
  position: absolute;
  top: 11.3rem;
  color: white;
  line-height: 1.5rem;
}
.img-icon {
  position: absolute;
  right: 2.5rem;
  top: 11.3rem;
  color: white;
  line-height: 1.5rem;
}
.img-num {
  position: absolute;
  right: 1rem;
  top: 11.3rem;
  color: white;
  line-height: 1.5rem;
}
</style>

