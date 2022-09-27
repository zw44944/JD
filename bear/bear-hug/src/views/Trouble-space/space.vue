<!-- 困境空间入口 -->
<template>
  <div class="space">
    <banner></banner>
    <identity :currentPage="currentPage" :isSelect="isSelect"></identity>
  </div>
</template>

<script>
import banner from "./banner";
import identity from "./identity";
identity;
export default {
  name: "space",
  components: {
    banner,
    identity,
  },
  data() {
    return {
      currentPage: "",
      isSelect: false,
    };
  },
  watch: {
    $route: {
      handler(to) { 
        const { interspace } = to.params;
        this.currentPage = interspace;
        if (to.matched.length < 3 && to.matched[1].name === "Trouble-space") {
          this.isSelect = false;
        } else {
          this.isSelect = true;
        }
      },
      deep: true,
      immediate: true,
    },
  }
};
</script>
<style lang='scss' scoped>
.space {
  background-color: #f5f6fa;
}
</style>