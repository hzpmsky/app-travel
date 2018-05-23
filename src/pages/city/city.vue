<template>
  <div>
    <city-header></city-header>
    <city-list ref="cityList"></city-list>
    <char-list></char-list>
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
      scroll: null
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(
        res => {
          console.log(res)
        })
    }
  },
  mounted: function() {
    this.getCityInfo()
  }
}
</script>

