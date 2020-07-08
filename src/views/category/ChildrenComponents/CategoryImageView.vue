<template>
  <div class="imageView">
    <div class="imageItem" v-for="(item,index) in subList" :key="index">
      <a :href="item.link">
        <img  :src="item.image" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryImageView",
    props:{
      subList:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
 .imageItem{
   width: 50%;
   display: inline-block;
 }
 .imageItem a{
   display: inline-block;
   width: 100%;
 }

  .imageItem img{

    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
  }
</style>