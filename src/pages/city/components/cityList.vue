<template>
  <div>
    <div class="wraper" ref="wraper">
      <!--所在城市模块-->
      <div class="location">
        <div class="location-title">您的位置</div>
        <div class="location-city">北京</div>
      </div>
      <!--热门城市模块-->
      <div>
        <div class="hotCity-title">热门城市</div>
        <div class="hotCity-all">
          <div class="hotCity" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <!--城市列表模块-->
      <div class="list">
        <div class="item" v-for="(item,key) of cityList" :ref="key">
          <!--字母-->
          <div class='list-title'>{{key}}</div>
          <!--字母下的城市-->
          <div class="list-city" v-for="data of item">{{data.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  name: 'CityList',
  props: {
    letter: String
  },
  data() {
    return {
      hotCities: [],
      cityList: { type: Object }
    }
  },
  mounted: function () {
    console.log('this.cityAll')
    console.log(this.cityList)
    this.scroll = new BScroll(this.$refs['wraper'])
    console.log('this.scroll')
    console.log(this.scroll)
  },
  watch: {
    letter() {
      if (this.letter) {
        //获取letter标签
        // console.log(this.$refs[this.letter])
        if (this.$refs[this.letter]) {
        //  console.log(this.$refs[this.letter][0])
          const element = this.$refs[this.letter][0]
          //滚动scrollToElement方法存在于scroll 的原型中
          console.log(this.scroll.scrollToElement)
          this.scroll.scrollToElement(element)
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.location-title {
  background-color: rgba(96, 96, 96, 0.15);
  height: 1.5rem;
  text-align: left;
}
.location-city {
  height: 1.5rem;
  width: 4.2rem;
  border: 1px solid green;
  margin-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 5px;
}
.hotCity-title {
  background-color: rgba(96, 96, 96, 0.15);
  height: 1.5rem;
  text-align: left;
}
.hotCity-all {
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  .hotCity {
    height: 1.5rem;
    width: 4.2rem;
    border: 1px solid green;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 5px;
  }
}
.list-title {
  background-color: rgba(96, 96, 96, 0.15);
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: left;
  //margin-right:0.8rem;
}
.list-city {
  line-height: 2rem;
  border-bottom: 1px solid rgba(96, 96, 96, 0.15);
  text-align: left;
  vertical-align: middle;
}
</style>

