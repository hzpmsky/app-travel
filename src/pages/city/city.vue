<template>
  <div>
    <city-header @getKeyWord="keyWord"></city-header>
    <city-list ref="cityPage" :letter="char" :keyword="keyword"></city-list>
    <char-list @changeLetter="charChange"></char-list>
  </div>
</template>
<script>
import CityHeader from './components/header.vue'
import CityList from './components/cityList.vue'
import CharList from './components/charList.vue'
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  components: {
    CityHeader,
    CityList,
    CharList
  },
  data() {
    return {
      scroll: null,
      char: '',
      keyword: '',
      charListShow: true
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(
        res => {
          this.$refs['cityPage'].hotCities = res.data.data.hotCities
          this.$refs['cityPage'].cityList = res.data.data.cities
          console.log(this.$refs['cityPage'].cityList)
        })
    },
    charChange(val) {
      this.char = val
      console.log(val)
    },
    keyWord(val) {
      this.keyword = val;
      console.log('city:this.keyword:')
      console.log(this.keyword)
    }
  },
  created: function () {
    this.getCityInfo()
  },
  watch: {
    keyword() {
    }
  }
}
</script>

