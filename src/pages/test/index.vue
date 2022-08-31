<template>
  <div class="test">
    <div class="abc">test入口</div>
    <div @click="testClick"> 请点击我 {{ store.helloPinia }}</div>
    <div>{{ store.count }}</div>
    <test></test>
    <div>测试交互</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Test'
}
</script>

<script lang="ts" setup>
import Test from './components/test.vue'
import { mainStore } from '/@/store/test'
import { get_week_info } from '/@/api/test'
get_week_info().then((res: any) => {
  console.log(res.data)
})
const store = mainStore()
const testClick = () => {
  store.count++
}
</script>

<style lang="scss" scoped>
.test {
  .abc {
    color: red;
    font-size: 16px;
  }
}
</style>