<template>
  <div class="controlbar">
    <div class="tab" :class="{'active':currentIdx === index}"
         @click="tabChange(index)"
         v-for="(item,index) in titles" :key="index">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: "CategoryGoodsControlbar",
    data(){
      return{
        titles:["流行","新款","精选"],
        currentIdx:0,
      }
    },
    methods:{
      tabChange(index){
        this.currentIdx = index;
        this.$emit("categoryGoodsTabChangeSignal",index)
      }
    }
  }
</script>

<style scoped>
  .controlbar{
    display: flex;
    text-align: center;

    box-shadow: 0px -1px 1px rgba(0,0,0,0.1);
    height: 36px;
    line-height: 32px;
    background-color: rgb(238,238,238);
    margin: 10px 0px;
  }
  .tab{
    flex:1;
  }
  .active{
    background-color: #fff;
  }
</style>