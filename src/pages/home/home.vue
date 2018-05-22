<template>
  <div>
    <div class="header">
      <home-header></home-header>
      <swiper></swiper>
      <icons></icons>
      <recomond></recomond>
      <weekend></weekend>
    </div>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import Swiper from './components/swiper'
import Icons from './components/icons'
import Recomond from './components/recomond'
import Weekend from './components/weekend'
export default {
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Recomond,
    Weekend
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
