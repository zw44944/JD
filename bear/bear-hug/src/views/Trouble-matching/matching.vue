<!-- 困境匹配主入口 -->
<template>
    <router-view></router-view>
</template>

<script>
import countDown from "./countDown.vue";
export default {
  name: "matching",
  components: { countDown },
};
</script>
<style lang='scss' scoped>
</style>