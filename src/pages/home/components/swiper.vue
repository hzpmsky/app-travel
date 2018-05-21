<template>
   <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default{
name:'HomeSwiper',
data(){
 return {
   swiperOption: {
     pagination: '.swiper-pagination',
     loop: true
   },
swiperList:[{
id:'0001',
imgUrl:'https://imgs.qunarzz.com/p/tts2/1701/4c/abb969ff3ca39c02.jpg_r_390x260x90_710992c9.jpg'
},
{
  id:'0002',
imgUrl:'https://imgs.qunarzz.com/p/tts3/1612/3d/1814160152b32202.jpg_r_390x260x90_1aaf4e97.jpg'
},
{
  id:'0003',
imgUrl:'https://imgs.qunarzz.com/p/tts5/1612/7a/dd90fc40f94ce602.jpg_r_390x260x90_0e51e5ce.jpg'
}]
 }
}
}
</script>
<style lang="less" scoped>
</style>
