<template>
  <div class="header">
    <div class="header-area">
      <div class='header-area-left'>
        <div class="iconfont" @click="jumpToHome">&#xe600;</div>
      </div>
      <div class="header-area-button">国内城市</div>
    </div>
    <div>
      <input type="text" class='header-input' placeholder="输入城市名或拼音">
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  data() {
    return {

    }
  },
  methods: {
    jumpToHome() {
      //this.$router.go('/home')
      this.$router.push({path:'/home'})
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 4rem;
  background-color: #00bcd4;
  .header-area {
    height: 2rem;
    //border: 1px solid red;
    .header-area-left {
      float: left;
      margin-top: 0.5rem;
      margin-left: 0.3rem;
    }
    .header-area-button {
      line-height:2rem;
      float: right;
      margin-right: 50%;
      text-align: center;
    }
  }
  .header-input {
    width: 96%;
    height: 1.5rem;
  }
  input[type="text"] {
    text-align: center;
  }
  input[type="text"]:focus {
    text-align: left;
  }
}
</style>


