<template>
  <div>
    <div v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom">
          <i class="iconfont">&#xe61c;</i>
        <span class="item-name">{{item.title}}</span></div>
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
// .iconfont{
//    margin-right: 1rem;
// }
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

