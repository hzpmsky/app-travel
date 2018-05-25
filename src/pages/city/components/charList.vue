<template>
  <div class="char-list">
    <div class='item' v-for="item of charList" @click="currentChar(item)">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'charList',
  data() {
    return {
      charList: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'W', 'Y', 'U', 'X', 'Y', 'Z'
      ]
    }
  },
  methods: {
    currentChar(item) {
      console.log(item)
      //触发父组件的滚动事件，item传过去
      this.$emit('changeLetter', item)
    }
  }
}
</script>
<style lang="less" scoped>
.char-list {
  position: absolute;
  top: 8.5rem;
  right: 0.2rem;
  width: 1rem;
  color: blue;
  //background-color: red;
  .item {
    margin-bottom: 0.2rem;
  }
}
</style>


