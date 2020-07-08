<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "scroll",
    props:{
      probeType: {
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad: {
        type:Boolean,
        default() {
          return false;
        }
      }

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        useTransition:false,

      })
      this.scroll.on("scroll",position => {
        this.$emit("scroll",position);
      })
      this.scroll.on("pullingUp",() => {
        // console.log("上拉");

        this.$emit("pullingUp")

      })
    },
    data(){
      return {
        scroll:null
      }
    }
  }

</script>

<style scoped>


</style>