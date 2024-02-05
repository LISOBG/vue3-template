<script setup lang="ts">
import { ref } from "vue";
import ContextMenu from "./components/ContextMenu.vue";

const choose1Text = ref("");

const choose1 = (event: any) => {
  console.log("111");
  choose1Text.value = event.label;
};
</script>

<template>
  <div class="container">
    <ContextMenu
      class="block1"
      :menu="[
        { label: '添加' },
        { label: '删除' },
        { label: '编辑' },
        { label: '查看' },
        { label: '复制' }
      ]"
      @select="choose1"
    >
      <h2>{{ choose1Text }}</h2>
    </ContextMenu>
  </div>
</template>

<style scoped>
.container {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}

.block1 {
  width: 30%;
  height: 300px;
  margin-right: 30px;
  background-color: aqua;
}
</style>
