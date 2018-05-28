<template>
  <div class="header">
    <div class="header-area">
      <div class='header-area-left'>
        <div class="iconfont" @click="jumpToHome">&#xe600;</div>
      </div>
      <div class="header-area-button">国内城市</div>
    </div>
    <div>
      <input v-model="keyword" type="text" class='header-input' placeholder="输入城市名或拼音">
    </div>
    <div class="search-area" v-if="searchIsShow">
      <!-- <ul>
        <router-link tag="li" v-for="item of list" :key="item.id">{{item.name}}
        </router-link>
      </ul> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  data() {
    return {
      list: [
        {
          "id": 57,
          "spell": "akesu",
          "name": "阿克苏"
        }, {
          "id": 58,
          "spell": "alashanmeng",
          "name": "阿拉善盟"
        }, {
          "id": 59,
          "spell": "aletai",
          "name": "阿勒泰"
        }, {
          "id": 60,
          "spell": "ali",
          "name": "阿里"
        }, {
          "id": 61,
          "spell": "ankang",
          "name": "安康"
        }, {
          "id": 62,
          "spell": "anqing",
          "name": "安庆"
        }, {
          "id": 63,
          "spell": "anshan",
          "name": "鞍山"
        }, {
          "id": 64,
          "spell": "anshun",
          "name": "安顺"
        }, {
          "id": 65,
          "spell": "anyang",
          "name": "安阳"
        }, {
          "id": 338,
          "spell": "acheng",
          "name": "阿城"
        }, {
          "id": 339,
          "spell": "anfu",
          "name": "安福"
        }, {
          "id": 340,
          "spell": "anji",
          "name": "安吉"
        }, {
          "id": 341,
          "spell": "anning",
          "name": "安宁"
        }, {
          "id": 342,
          "spell": "anqiu",
          "name": "安丘"
        }, {
          "id": 343,
          "spell": "anxi",
          "name": "安溪"
        }, {
          "id": 344,
          "spell": "anyi",
          "name": "安义"
        }, {
          "id": 345,
          "spell": "anyuan",
          "name": "安远"
        }
      ],
      keyword: '',
      searchIsShow: false
    }
  },
  methods: {
    jumpToHome() {
      //this.$router.go('/home')
      this.$router.push({ path: '/home' })
    }
  },
  watch: {
    keyword() {
      if (this.keyword.trim()) {
        this.$emit('getKeyWord', this.keyword)
        this.searchIsShow = true
      } else{
        this.searchIsShow = false
      }
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
      line-height: 2rem;
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
  .search-area {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0rem;
    background-color: black;
  }
}
</style>


