<template>
  <div class="test">
    <div class="abc">我是test组件的内容</div>
    <div>{{ store.count }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Test'
}
</script>

<script lang="ts" setup>
import { mainStore } from '/@/store/test'
import { get_week_info } from '/@/api/test'
get_week_info().then((res: any) => {
  console.log(res.data)
})
const store = mainStore()
console.log(store.count)
</script>

<style lang="scss" scoped>
.test {
  .abc {
    color: red;
    font-size: 16px;
  }
}
</style>