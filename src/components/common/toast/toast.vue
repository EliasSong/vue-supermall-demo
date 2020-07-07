<template>
  <transition name="fade">
  <div id="toast" v-if="isShow">
    <div class="alert alert-info" role="alert">
      {{message}}
    </div>
  </div>
  </transition>

</template>

<script>
  export default {
    name: "toast",
    props:{
      message:{
        type:String,
        default(){
          return ""
        }
      },
      isShow:{
        type:Boolean,
        default(){
          return false;
        }
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped>
  #toast{
    position: fixed;

    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 100%;
    height: 60px;




  }
  .alert{
    font-size: 1.5rem;
    text-align: center;
    width: 75%;
    margin: 0 auto;

  }
  .fade-enter-active,.fade-leave-active{
    transition: all 1s ease;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateY(-10px) ;
  }

</style>