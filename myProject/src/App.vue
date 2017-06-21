/*组件，单页面的意思是结构样式*/
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="page-title"><a href="#/">开发组件库</a></h1>
    <router-view></router-view>
    <h1 class="page-title" v-if='false'>这不是一个可见的哦！</h1>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  @import "./assets/css/App.css";
</style>
