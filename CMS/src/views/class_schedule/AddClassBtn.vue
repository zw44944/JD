<template>
  <div
    class="flex-vertical-center"
    style="height: 73px; width: 205px"
    @mouseover="btnShowFlag = true"
    @mouseout="btnShowFlag = false"
    @click="show"
  >
    <el-button
      v-show="btnShowFlag"
      icon="el-icon-plus"
      circle
      size="mini"
    ></el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnShowFlag: false,
    };
  },
  methods: {
    show() {
      this.$emit("showAddDialog");
    },
  },
};
</script>
<style lang="less" scoped>
</style>