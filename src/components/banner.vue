<template>
  <div class="container" @click="bannerImgClick">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="banner-img" :src="item" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonBanner',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    bannerImgClick() {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 1);
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;
    //background-color: white;
    .banner-img {
      width: 100%;
      // height:100%;
    }
    .swiper-pagination {
      color: #fff;
    }
  }
}
</style>
