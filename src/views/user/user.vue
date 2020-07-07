<template>
  <div class="user">
    <h1>用户页面</h1>
    <test :ms="msg"></test>
    <div class="btn btn-danger" @click="change">dianwo</div>

  </div>

</template>

<script>
 import test from "./test";
  export default {
    name: "user",
    components:{
      test
    },
    data(){
      return {
        msg:"womeigai"
      }
    },
    methods:{
      change(){
        console.log(this.msg);
        this.msg = "wo gai le"
        console.log(this.msg);

      }
    }
  }
</script>

<style scoped>

</style>