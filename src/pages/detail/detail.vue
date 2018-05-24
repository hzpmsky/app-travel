<template>
  <div>
    <detail-header></detail-header>
    <detail-hidden></detail-hidden>
    <div class="test"></div>
  </div>
</template>
<script>
import DetailHeader from './components/header'
import DetailHidden from './components/hidden'
export default {
  components: {
    DetailHeader,
    DetailHidden
  },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@import "../../assets/less/common.less";
.test {
  height: 40rem;
}
</style>


