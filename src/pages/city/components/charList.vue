<template>
  <div class="char-list">
    <div class='item' v-for="item of letters" :ref="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="currentChar(item)">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'charList',
  computed: {
    letters() {
      const letters = []
      for (let i in this.charList) {
        letters.push(this.charList[i])
      }
      // console.log(letters)
      return letters
    }
  },
  data() {
    return {
      charList: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'W', 'Y', 'U', 'X', 'Y', 'Z'
      ],
      touchStatus: false
    }
  },
  methods: {
    currentChar(item) {
      //console.log(item)
      //触发父组件的滚动事件，item传过去
      this.$emit('changeLetter', item)
    },
    handleTouchStart() {
      this.touchStatus = true
      console.log(this.touchStatus)
    },
    handleTouchMove(e) {
      debugger
      if (this.touchStatus) {
        console.log(e)
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor(touchY)
        })
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
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


