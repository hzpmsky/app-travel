<template>
  <div>
    <!--返回按钮-->
    <router-link tag="div" to="/" class="header-back" v-show="showIcon">
      <div class="iconfont icon-back">&#xe600;</div>
    </router-link>
    <!--header-fixed-->
    <div class="header" @click="jumpToHome" :style="changeOpacity" v-show="showHeader">
      <div class="header-area">
        <div class='header-area-left'>
          <div class="iconfont">&#xe600;</div>
        </div>
        <div class="header-area-button">景点名称</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHidden',
  data() {
    return {
      changeOpacity: { opacity: 0 },
      showIcon: true,
      showHeader:false
    }
  },
  methods: {
    jumpToHome() {
      //this.$router.go('/home')
      this.$router.push({ path: '/' })
    },
    calScroll() {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.changeOpacity = { opacity }
        this.showIconbs = false
        this.showHeader = true
      } else {
        this.showIcon = true
        this.showHeader = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.calScroll)
  }
}
</script>
<style lang="less" scoped>
.header-back {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  background-color: rgba(0, 0, 0, 0.7);
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  .icon-back {
    color: white;
    font-size: 1.3rem;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 2.3rem;
  background-color: #00bcd4;
  .header-area {
    height: 2.3rem;
    //border: 1px solid red;
    .header-area-left {
      float: left;
      margin-top: 0.5rem;
      margin-left: 0.3rem;
    }
    .header-area-button {
      line-height: 2.3rem;
      float: right;
      margin-right: 50%;
      text-align: center;
    }
  }
}
</style>

