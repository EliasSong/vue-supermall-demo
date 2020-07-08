<template>
  <div id="subNavbar">
    <div class="subNavbarItem" @click="subNavbarItemClick(index)" :class="{'active':index === subNavbarCurrentIdx}" v-for="(item,index) in mainList" :key="index">{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "CategorySubNavbar",
    data(){
      return {
        subNavbarCurrentIdx:0,
      }
    },
    props:{
      mainList:{
        default(){
          return []
        },
        type:Array,
      }
    },
    methods:{
      subNavbarItemClick(index){
        this.subNavbarCurrentIdx = index;
        this.$emit("subNavbarCurrentIdxSignal",this.subNavbarCurrentIdx)
      }
    }
  }
</script>

<style scoped>
 #subNavbar{
   text-align: center;
   display: flex;
   flex-direction: column;
   height: 100%;
 }
  .subNavbarItem{
    flex: 1;
    line-height: 43.63px;
  }
  .active{
    background-color: #fff;
  }


</style>