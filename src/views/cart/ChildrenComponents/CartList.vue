<template>
  <div class="cartlist">
    <CartListItem v-for="(item,index) in cartlist" :key="index" :item="item"></CartListItem>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    props:{
      cartlist:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    components:{
      CartListItem,
    }
  }
</script>

<style scoped>
  .cartlist{

  }
</style>