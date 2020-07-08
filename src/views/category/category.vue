<template>
  <div id="category">

    <h1>分类页面</h1>


  </div>

</template>

<script>
  import {getCategory,getSubcategory} from "../../network/category";

  export default {
    name: "category",
    data(){
      return {
        currIndex: 0,
        currMaitKey: 0,
        list: []
      }
    },
    created() {
      getCategory().then(res => {
        this.list = res.data.category.list;

        getSubcategory(this.list[0].maitKey).then(res => {
          console.log(res);
        });
      })


    },
    mounted() {
    },
    methods:{

    },
  }
</script>



<style scoped>

</style>