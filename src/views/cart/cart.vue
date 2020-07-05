<template>
  <div class="cart">
    <CartNavbar>
      <div slot="middle">购物车</div>
    </CartNavbar>
    <CartScroll class ="cartscroll" :probe-type="3">
      <CartList :cartlist ="cartList" v-if="cartList.length !== 0"></CartList>
      <div v-else>这里什么都没有</div>
    </CartScroll>
    <CartCheckOut></CartCheckOut>
  </div>

</template>

<script>
  import CartNavbar from "../../components/common/navbar/navbar";
  import CartScroll from "../../components/common/scroll/scroll";
  import CartCheckOut from "./ChildrenComponents/CartCheckOut";
  import CartList from "./ChildrenComponents/CartList";
  export default {
    name: "cart",
    components:{
      CartNavbar,
      CartScroll,
      CartCheckOut,
      CartList,
    },
    data(){
      return {
        cartList:[],
        totalPrice:0,
        totalCount:0,
      }
    },
    created() {
      this.cartList = this.$store.state.cartList;

    },
    activated() {

    }
  }
</script>

<style scoped>
  .cartscroll{
    height: calc(100vh - 44px - 70px - 45px);
    overflow: hidden;
  }
</style>