<template>
  <div>
    <div>
      <div class="location">
        <div class="location-title">您的位置</div>
        <div class="location-city">北京</div>
      </div>
      <div>
        <div class="hotCity-title">热门城市</div>
        <div class="hotCity-all">
          <div class="hotCity" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <div class="list">
        <div class="item" v-for="(item,key) of cityList">
          <div class='list-title'>{{key}}</div>
          <div class="list-city" v-for="data of item">{{data.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityList',
  data() {
    return {
      hotCities: [],
      cityList: { type: Object }
    }
  },
  mounted: function () {
    console.log('this.cityAll')
    console.log(this.cityList)
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

