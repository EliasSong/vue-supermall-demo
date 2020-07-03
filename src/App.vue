<template>
  <div id="app">
    <keep-alive exclude="detail,cart">
      <router-view></router-view>
    </keep-alive>

    <tab-bar id="tabbar">
      <tab-bar-item path="/home">
        <i slot="tabbar-item-content-icon" class="fas fa-home fa-lg"></i>
        <div slot="tabbar-item-content-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i slot="tabbar-item-content-icon" class="fas fa-bars fa-lg"></i>
        <div slot="tabbar-item-content-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <i slot="tabbar-item-content-icon" class="fas fa-shopping-cart fa-lg"></i>
        <div slot="tabbar-item-content-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <i slot="tabbar-item-content-icon" class="fas fa-user fa-lg"></i>
        <div slot="tabbar-item-content-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>


<script>
  import TabBar from "./components/common/tabbar/tabbar.vue"
  import TabBarItem from "./components/common/tabbar/tabbaritems"
  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem,
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
