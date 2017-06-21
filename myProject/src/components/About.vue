<template>
  <div class="about">
    <div class="mod-module mod-parallel">
      <div class="img-list type-full">
        <div class="img-box">
          <p class="img-item">
            <a class="page-link" href="#/btn">按钮</a>
          </p>
        </div>
        <div class="img-box">
          <p class="img-item">
            <a class="page-link" href="#/list">列表</a>
          </p>
        </div>
        <div class="img-box">
          <p class="img-item">
            <a class="page-link" href="#/nav">导航</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Hell world!'
    }
  }
}
</script>

<style scoped>
@import './css/index.css';
h1, h2 {
  font-weight: normal;
  color:red;
}
</style>
