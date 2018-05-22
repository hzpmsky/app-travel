<template>
  <div>
    <div class="recommend-titile">热销推荐</div>
    <ul class="recommend">
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <div class="search-button">查看所有产品</div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecomond',
  data() {
    return {
      recommendList: [
      //   {
      //   id: '001',
      //   url: ImgUrl,
      //   title: '杭州西湖',
      //   desc: '杭州西湖杭州西湖杭州西湖'
      // },
      // {
      //   id: '002',
      //   url: ImgUrl,
      //   title: '武汉欢乐谷',
      //   desc: '武汉欢乐谷武汉欢乐谷武汉欢乐谷武汉欢乐谷武汉欢乐谷'
      // },
      // {
      //   id: '003',
      //   url: ImgUrl,
      //   title: '广州塔',
      //   desc: '广州塔广州塔广州塔广州塔'
      // },
      // {
      //   id: '004',
      //   url: ImgUrl,
      //   title: '南京中山陵',
      //   desc: '南京中山陵南京中山陵南京中山陵南京中山陵南京中山陵南京中山陵南京中山陵南京中山陵'
      // },
      // {
      //   id: '005',
      //   url: ImgUrl,
      //   title: '上海东方明珠',
      //   desc: '上海东方明珠上海东方明珠上海东方明珠上海东方明珠上海东方明珠'
      // },
      // {
      //   id: '006',
      //   url: ImgUrl,
      //   title: '香港维多利亚港',
      //   desc: '香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港香港维多利亚港'
      // }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.recommend-titile {
  line-height: 2.5rem;
  background: rgba(96, 96, 96, 0.15);
  text-align: left;
  margin-top: 2rem;
}
.recommend {
  padding-left: 0rem;
  margin-top: 0rem;
  .item {
    list-style: none;
    display: flex;
    overflow: hidden;
    margin-top: 0.8rem;
    // justify-content:flex-start;
    .item-img {
      width: 35%;
      height: 8.1875rem;
      margin-right: 0.5rem;
    }
    .item-info {
      flex: 1;
      min-width: 0;
      height: 8.1875rem;
      overflow: hidden;
      .item-title {
        text-align: left;
        text-overflow: ellipsis;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        margin-top: 0.8rem;
        line-height: 1.3875rem;
        overflow: hidden;
      }
      .item-desc {
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        margin-top: 0.4rem;
        margin-bottom: 0.35rem;
        height: 1.1875rem;
        //height:1.1875rem;
      }
      .item-button {
        float: left;
        text-align: left;
        margin-top: 1rem;
        background: #ff9300;
        margin-bottom: 0.5rem;
        line-height: 1.5rem;
      }
    }
  }
}
.search-button{
   color:blue;
   line-height:3rem;
   border-top: 1px solid rgba(200,200,200,0.25);
   // border-bottom: 1px solid #333;
}
</style>


