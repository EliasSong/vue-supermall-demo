<template>
  <transition name="fade">
    <div v-if="isShow" class="back-top">
      <i class="fas fa-arrow-up fa-2x"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "backtop",
    methods:{
    },
    props:{
      isShow:{
        default(){
          return false
        },
        type:Boolean
      }
    }
  }
</script>

<style scoped>
  .back-top{
    background-color: rgba(240, 245, 245, 0.8);
    border-radius: 23px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),0px -1px 1px rgba(0, 0, 0, 0.1);
    width: 46px;
    height: 46px;
    padding: 6px 0px;
    text-align: center;
    position: fixed;
    z-index: 1;
    right: 20px;
    bottom: 90px;
  }
  .fade-enter-active,.fade-leave-active{
    transition: all 0.5s ease;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateY(-10px) ;
  }


</style>