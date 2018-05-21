<template>
  <div class="header">
    <div class='header-left'>
      <div class="iconfont">&#xe600;</div>
      </div>
    <div class='header-input'>
      <input type='text' class='input' placeholder="请输入汉字或拼音"></input>
    </div>
    <div class='header-right'>
      <span>城市</span>
       <span class="iconfont arrow-down">&#xe62d;</span>
    </div>
  </div>
</template>
<script>
</script>
<style lang='less' scoped>
.header {
  display: flex;
  background-color: #00bcd4;
  line-height: 1.2rem;
  color:#fff;
  width:100%;
  .header-left {
    width: 2.26rem;
    float: left;
    .iconfont {
      position: absolute;
      vertical-align: middle;
    }
  }
  .header-input {
    flex: 1; //自动撑开
    .input {
    line-height: 2.2rem;
    border-radius: 0.86rem;
    width: 15rem;
    outline: none;
    }
    input[type='text']{
    text-align:center;
    }
    input[type='text']:focus{
    text-align:left;
    }
  }
  .header-right {
    line-height: 100%;
    width: 4.66rem;
    float: right;
    text-align: center;
    .arrow-down {

    }
  }
}
</style>
