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
          <div class="hotCity" v-for="item of hotCity">{{item.hotCity}}</div>
        </div>
      </div>
      <div class="list">
        <div class="item" v-for="item of cityList">
          <div class='list-title'>{{item.itemCode}}</div>
          <div class="list-city" v-for="data of item.itemCity">{{data}}</div>
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
      hotCity: [
        { id: '001', hotCity: '北京' },
        { id: '002', hotCity: '上海' },
        { id: '003', hotCity: '南京' },
        { id: '004', hotCity: '西安' },
        { id: '005', hotCity: '武汉' },
        { id: '006', hotCity: '成都' },
        { id: '007', hotCity: '拉萨' },
        { id: '008', hotCity: '桂林' },
        { id: '009', hotCity: '广州' },
        { id: '0010', hotCity: '南京' },
        { id: '0011', hotCity: '厦门' },
        { id: '0012', hotCity: '杭州' },
        { id: '0013', hotCity: '重庆' },
        { id: '0014', hotCity: '香港' }
      ],
cityList:[
{itemCode:'A',itemCity:['阿拉善','安康','安阳','安陆','阿克苏地区','阿克苏地区']},
{itemCode:'B',itemCity:['保定','包头','本溪','保定','包头','本溪','保定','包头','本溪']},
{itemCode:'C',itemCity:['长春','池州','沧州','曹妃甸','长春','池州','沧州','曹妃甸','长春','池州','沧州','曹妃甸']},
{itemCode:'D',itemCity:['大连','当阳','大悟','东莞','东营','大连','当阳','大悟','东莞','东营']},
{itemCode:'E',itemCity:['鄂尔多斯','鄂州','恩施','峨眉','鄂尔多斯','鄂州','恩施','峨眉']},
{itemCode:'F',itemCity:['阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区']},
{itemCode:'G',itemCity:['阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区']},
{itemCode:'H',itemCity:['阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区']},
{itemCode:'I',itemCity:['阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区']},
{itemCode:'J',itemCity:['阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区','阿克苏地区']},
]
    }
  }
}
</script>
<style lang="less" scoped>
.location-title {
  background-color: gray;
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
  background-color: gray;
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
  background-color: gray;
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

