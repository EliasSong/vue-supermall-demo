<template>
  <div class="nav-bar">
    <div class="navbar-left"><slot name="left"></slot></div>
    <div class="navbar-middle"><slot name="middle"></slot></div>
    <div class="navbar-right"><slot name="right"></slot></div>
  </div>

</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: whitesmoke;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 1;*/
  }
  .navbar-left,.navbar-right{
    width: 60px;
    background-color: blue;

  }
  .navbar-middle{
    flex:1;

  }

</style>