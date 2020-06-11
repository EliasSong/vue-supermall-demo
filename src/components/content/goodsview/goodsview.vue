<template>
  <div class="goodsview">
    <GoodsViewItem v-for="(item,index) in goods"
     :key="index"
     :gooditem="item">
    </GoodsViewItem>
  </div>
</template>

<script>
  import GoodsViewItem from "./goodsviewitem";
  export default {
    name: "goodsviews",
    props:{
      goods:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    components:{
      GoodsViewItem,
    }
  }
</script>

<style scoped>
  .goodsview{
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
  }
</style>