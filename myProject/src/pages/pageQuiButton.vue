<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn msg="警告" class="default" v-on:btnClickEvent="doSth">
      <img class="icon" src="../img/diamond.png" slot="icon" alt="">
    </qui-btn>
  </div>
</template>
<script>
  import quiBtn from '../components/quiButton.vue'
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      doSth: function () {
        alert('这是一个警告按钮哦！')
      }
    }
  }
</script>
<style>
  .icon{
    width: 20px;
    height: 20px;
  }
</style>
