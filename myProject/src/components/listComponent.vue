<template>
  <div id="list-com">
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">X</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'listCom',
    props: ['title']
  }
</script>
