<template>
  <div>
    <detail-header></detail-header>
    <detail-hidden></detail-hidden>
    <detail-ticket :categoryList="categoryList"></detail-ticket>
  </div>
</template>
<script>
import DetailHeader from './components/header'
import DetailHidden from './components/hidden'
import DetailTicket from './components/ticket'
export default {
  components: {
    DetailHeader,
    DetailHidden,
    DetailTicket
  },
  data() {
    return {
      categoryList: [{
        "title": "成人票",
        "children": [{
          "title": "成人三馆联票",
          "children": [{
            "title": "成人三馆联票 - 某一连锁店销售"
          }]
        }, {
          "title": "成人五馆联票"
        }]
      }, {
        "title": "学生票"
      }, {
        "title": "儿童票"
      }, {
        "title": "特惠票"
      }]
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@import "../../assets/less/common.less";
</style>


