<template>
  <div class="detialimage">
    <div v-if="Object.keys(image).length !== 0" class="goods-info">
      <div class="info-desc clear-fix">
        <div class="start">
        </div>
        <div class="desc">{{image.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{image.detailImage[0].key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in image.detailImage[0].list" :key="index" :src="item">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailImageInfo",
    props:{
      image:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    updated() {
    }
  }
</script>

<style scoped>
  .goods-info{
    padding: 20px 0 0 0;
    border-bottom: 1px solid rgba(100,100,100,0.1);
    background-color: whitesmoke;
  }
  .info-desc{
    margin: 0 8px;
    border-top: 1px solid rgba(100,100,100,0.1);
    border-bottom: 1px solid rgba(100,100,100,0.1);
  }

  .info-desc .end{
    float: right;
  }
  .clear-fix::after{
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;

  }

  .info-desc .start, .info-desc .end{
    width: 5px;
    height: 5px;
    background-color: #333;
  }

  .info-desc .desc{
    padding: 8px 0;
    font-size: 14px;
  }
  .info-key{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img{
    width: 100%;
  }
</style>