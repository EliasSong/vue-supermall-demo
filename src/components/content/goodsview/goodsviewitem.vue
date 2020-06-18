<template>
  <div class="goodviewitem" @click="goodItemClick">
    <img :src="gooditem.show.img" alt="">
    <p>{{gooditem.title}}</p>
    <span class="goodItemPrice">价格：{{gooditem.price}}</span>
    <span class="goodItemCollect"><i style="color: #f86666" class="fas fa-heart"></i> {{gooditem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "goodsviewitem",
    props:{
      gooditem:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    methods:{
      goodItemClick(){
        this.$router.push("/detail/"+this.gooditem.iid)
      }
    }
  }

</script>

<style scoped>
  .goodviewitem{
    width: 50%;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 14px;

  }
  .goodviewitem img{
    margin: 5px;

    width:95%;
    border-radius: 8px;
    top: 0;
  }
  .goodviewitem p{
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0px;
  }
  .goodItemPrice{
    color: #f62c2c;
    display: inline-block;
    width: 50%;
    margin-bottom: 5px;
  }
  .goodItemCollect{
    display: inline-block;
    width: 50%;
    margin-bottom: 5px;
  }

</style>