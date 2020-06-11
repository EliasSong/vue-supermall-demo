<template>
  <div id="tab-control">
    <div  class="tabcontrol-item"
          :class="{'active':index === currentIdx}"
          v-for="(item,index) in titles" :key="index"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabcontrol",
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data() {
      return {
        currentIdx:0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIdx = index;
        this.$emit('tabClick',index)
      }
    }

  }
</script>

<style scoped>
  #tab-control{
    display: flex;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),0px -1px 1px rgba(0, 0, 0, 0.1);
    background-color: whitesmoke;
    height: 36px;
    line-height: 36px;
    z-index: 1;

  }
  .tabcontrol-item{
    flex: 1;
    transition:color 1s,background-color 0.5s ;
    transition-timing-function: ease;
    -webkit-transition:color 0.5s, background-color 0.5s; /* Safari */
    -webkit-transition-timing-function: ease;
  }
  .tabcontrol-item span{
    padding:3px 5px;
  }
  .active{
    background-color: gray;
    color: white;
  }
  .active span{
    border-bottom: 2px solid white;
  }
</style>