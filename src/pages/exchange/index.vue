<template>
  <div class="box">
    <div class="more" @click="moreClick">查看更多 > </div>
  </div>
</template>

<script lang="ts" setup>
const win:any = window
win.appToken = win.setAppUserInfo(data)
alert('我调用安卓'+win.appToken)
const moreClick = () => {
  alert('安卓调用我')
  window.android.ChangeMore()
}
</script>

<style>
@import "../../assets/css/exchange.css";
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>