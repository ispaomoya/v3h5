<template>
  <div class="h5-face">
    <div class="h5-face--tab">
      <van-icon name="arrow-left" @click="goBlackClick" />身份信息录入
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'H5Face'
}
</script>
<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()
onMounted(() => {
  const win:any = window
  // 测试我调用ios
  proxy.$bridge.callhandler('shareTokenResult', null, (token, imSkin) => {
    alert('测试我调用ios' + token + '-------' + imSkin)
    win.appToken = token
  })

})

// 测试ios调用我的， 点击返回按钮
const goBlackClick = () => {
  alert('测试ios调用我的')
  proxy.$bridge.registerhandler('callbackH5Facey', (data, responseCallback) => {
      responseCallback(data)
  })
}
</script>

<style>
@import "../../assets/css/h5Face.css";
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>