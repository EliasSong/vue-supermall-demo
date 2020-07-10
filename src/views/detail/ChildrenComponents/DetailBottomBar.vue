<template>
  <div class="bottombar">
    <div class="bar-item bar-left">
      <div class="item">
        <i class="fas fa-user fa-lg icon"></i>
        <span class="text">客服</span>
      </div>
      <div class="item">
        <i class="fas fa-store fa-lg icon"></i>
        <span class="text">店铺</span>
      </div>
      <div  class="item">
        <i class="fas fa-star fa-lg icon"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit("addCartSignal")
      }
    }
  }
</script>

<style scoped>
  .bottombar{
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: whitesmoke;
    display: flex;
    text-align: center;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item>div{
    flex: 1;
  }
  .bar-left .text{
    font-size: 13px;
  }

  .bar-right{
    font-size: 15px;
    color: #fff;
  }
  .bar-right .cart{
    background-color: gray;
    color: #fff;
    line-height: 70px;
  }
  .bar-right .buy{
    background-color: #ff6699;
    line-height: 70px;
  }
  .item{
    margin: auto 0;
  }
  .icon{
    display: block;
    margin: 5px auto;
  }

</style>