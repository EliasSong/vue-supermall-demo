<template>
  <div class="tabbar-item" @click="tabbarItemClick">
    <div class="tabbar-item-content" :class="{active:isActive}">
      <slot name="tabbar-item-content-icon"></slot>
      <slot name="tabbar-item-content-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "tabbaritems",
    props:{
      path:String
    },
    computed:{
      isActive(){
        return this.$route.path === this.path
      }
    },
    data(){
      return {
      }
    },
    methods:{
      tabbarItemClick(){
        if(this.$route.path !== this.path){
          this.$router.push(this.path)
        }
      }
    }
  }

</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    height: 100%;
  }
  .tabbar-item-content{
    padding:3px 0;
    transition:color 1s,background-color 0.5s ;
    transition-timing-function: ease;
    -webkit-transition:color 0.5s, background-color 0.5s; /* Safari */
    -webkit-transition-timing-function: ease;
  }

  .active{
    background-color: gray;
    color: white;
  }
</style>