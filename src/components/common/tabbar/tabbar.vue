<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar.vue"
  }

</script>

<style scoped>

  #tabbar{
    display: flex;
    text-align: center;
    background-color: #f5f5f5;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(0,0,0,0.1);
    height: 48px;
  }

</style>