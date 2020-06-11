<template>
  <div class="tabbar-item" @click="tabbarItemClick" :class="{active:isActive}">
    <div class="tabbar-item-content" >
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
    transition:all 0.5s;
    transition-timing-function: ease;
    -webkit-transition:all 0.5s; /* Safari */
    -webkit-transition-timing-function: ease;

  }
  .tabbar-item-content{
    padding-top:8px;

  }

  .active{
    background-color: gray;
    color: white;
  }
</style>