<template>
  <button class="qui-btn" v-bind:class="className" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
    name: 'qui-btn',
    props: {
      msg: {
        default: '下载'
      },
      className: {
        default: 'primary'
      }
    },
    methods: {
      // 绑定事件的关键代码
      btnClickEvent: function () {
        this.$emit('btnClickEvent')
      }
    }
  }
</script>
<style scoped>
  @import './css/qui-btn.import.css';
</style>
