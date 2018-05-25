<template>
  <div>
    <city-header></city-header>
    <city-list ref="cityPage" :letter="char"></city-list>
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
      char: ''
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
    }
  },
  created: function () {
    this.getCityInfo()
  }
}
</script>

