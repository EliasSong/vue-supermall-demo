<template>
  <div id="recommend-view">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-view-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendViewer",
    props:{
      recommend:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  #recommend-view{
    display: flex;
    width: 100%;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    background-color: #fff;
  }
  .recommend-view-item{
    flex: 1;
    padding-bottom: 10px;
  }
  img{
    width: 85%;
    padding: 10px 0px;
  }
</style>