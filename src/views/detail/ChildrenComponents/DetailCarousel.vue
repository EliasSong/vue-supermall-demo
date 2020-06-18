<template>
  <carousel>
    <div v-for="(item,index) in banner" :key="index" slot="carouselitem" :class="{'carousel-item active':index === 0,'carousel-item':index !== 0}">
      <a :href="item.link">
        <img :src="item" class="d-block w-100" alt="...">
      </a>
    </div>
  </carousel>
</template>

<script>
  import carousel from "../../../components/common/carousel/carousel";
  export default {
    name: "DetailCarousel",
    components:{
      carousel
    },
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
    },
    created() {
    }
  }
</script>

<style scoped>

</style>