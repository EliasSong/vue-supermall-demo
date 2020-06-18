<template>

  <div v-if="Object.keys(comments).length !==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="comments.user.avatar" alt="">
      <span>{{comments.user.name}}</span>
    </div>
    <div class="info-detail">
      <p>{{comments.content}}</p>
      <div class="info-other">
        <span class="date">{{comments.created | showDate}}</span>
        <span>{{comments.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in comments.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailCommentsInfo",
    props:{
      comments:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    filters:{
      showDate(val){
        const date = new Date(val * 1000)
        const month = String(date.getMonth()+1);
        const year =String(date.getFullYear());
        const day = String(date.getDay());
        const hour = String(date.getHours());
        const minute = String(date.getMinutes());
        const fullminute = String("00"+minute).substr(minute.length);
        const second = String(date.getSeconds());
        return year+'-'+month +'-'+day+' '+hour+':'+fullminute+':'+second;
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    background-color: whitesmoke;
  }
  .info-header{
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(100,100,100,0.1);
    /*border-top: 1px solid rgba(100,100,100,0.1);*/
  }
  .header-title{
    float: left;
  }
  .header-more{
    float: right;
    margin-right: 10px;
    color: dodgerblue;
  }
  .info-user{
    padding:10px 5px;
  }
  .info-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .info-user span{
    position: relative;
    font-size: 15px;
    top:-15px;
    margin-left: 10px;
  }
  .info-detail{
    padding: 0 10px;
  }
  .info-detail p{
    font-size: 14px;
  }
  .info-detail .info-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .date{
    margin-right: 8px;
  }
  .info-imgs{
    margin-top: 10px;
  }
  .info-imgs img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>