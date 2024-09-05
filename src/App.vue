
<!-- App.vue -->
<template>
  <Navbar/>
  <router-view :data="data"/>

</template>

<script setup>
// 컴포넌트 가져오기 부분은 필요 없음
  import Navbar from "./components/Navbar.vue";
  import data from './assets/portfolio.js'
</script>

<style scoped lang="scss">
/* 스타일 추가 가능 */
</style>