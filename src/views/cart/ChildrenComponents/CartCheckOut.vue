<template>
  <div class="checkout">
      <span class="allcheck">
        <i v-if="selectFlag" class="far fa-check-circle fa-2x"></i>
        <i v-else  class="far fa-circle fa-2x"></i>
      </span>
      <span class="content">
        <span class="price">总价格：{{this.$store.state.totalPriceString}}</span>
        <span class="count">总数量：{{this.$store.state.totalCountString}}</span>
      </span>

      <span class="checkoutBtn">结账</span>
  </div>
</template>

<script>
  export default {
    name: "CartCheckOut",
    data(){
      return{
        selectFlag:true
      }
    },
    props:{

    }
  }
</script>

<style scoped>
  .checkout{
    height: 45px;
    background-color: whitesmoke;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.1);
    display: flex;
    color: #333;
  }
  .content{
    margin: 0px;
    line-height: 45px;
    height: 100%;
    flex: 1;
    display: flex;
    text-align: center;

  }
  .content .price{
    flex: 1;

  }
  .content .count{
    flex: 1;
  }

  .allcheck{

    height: 100%;
    width: 48px;
  }
  .allcheck i{
    margin: 5px 8px;
    color: gray;
  }
  .checkoutBtn{
    width: 90px;
    line-height: 45px;
    text-align: center;
    background-color: orangered;
    color: white;
  }

</style>