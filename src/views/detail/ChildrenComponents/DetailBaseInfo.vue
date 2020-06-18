<template>
  <div v-if="Object.keys(good).length !==0" class="base-info">
    <div class="info-title">{{good.title}}</div>
    <div class="info-price">
      <span class="new-price">{{good.newPrice}}</span>
      <span class="old-price">{{good.oldPrice}}</span>
      <span v-if="good.discount" class="discount">{{good.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{good.columns[0]}}</span>
      <span>{{good.columns[1]}}</span>
      <span>{{good.services[good.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in good.services.slice(0,good.services.length-1)" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      good:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: black;
  }

  .info-price {
    margin-top: 10px;
    color: #f86666;
  }

  .info-price .new-price {
    font-size: 24px;

  }

  .info-price .old-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    border-radius: 8px;
    margin-left: 5px;
    background-color: gray;
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);

    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 45px;
  }

  .info-service-item{
    padding: 8px 0;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
  }

  .info-service-item span {
    font-size: 14px;
    color: #444;
  }
</style>