<template>
  <div>
    <div v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-icon">
<img src="" alt="">
        </span>
        {{item.title}}</div>
      <div v-if="item.children" class="item-children">
        <detail-ticket :categoryList="item.children"></detail-ticket>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailTicket',
  props: {
    categoryList: Array
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.item-icon {
  position: relative;
  left: 0.3rem;
  top: 0.6rem;
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background-size: 0.4rem 3rem;
 // background-image: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)
}
.item-title {
  display: inline-block;
  width: 100%;
  text-align: left;
  margin-left: 1rem;
}
.item-children {
  padding-left: 2rem;
  width: 100%;
}
.border-bottom {
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(96, 96, 96, 0.25);
}
</style>

