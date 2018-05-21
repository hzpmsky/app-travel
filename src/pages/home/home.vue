<template>
<div>
<div class="header">
<home-header></home-header>
<swiper></swiper>
</div>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import Swiper from './components/swiper'
export default {
components: {
  HomeHeader,
  Swiper
}
}
</script>
<style>
   .header{
   /* background-color:blue; */
   line-height:1.2rem;
margin-left: 0;
   }
</style>
