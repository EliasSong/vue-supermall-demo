<template>
  <div class="cartlistitem">
    <div class="item-selector">
      <i v-if="this.$store.getters.itemSelectFlag(item)" @click="itemClickRemove" class="far fa-check-circle fa-2x"></i>
      <i v-else @click="itemClickAdd" class="far fa-circle fa-2x"></i>

    </div>
    <div class="item-img">
      <img :src="item.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{item.price}}</div>
        <div class="item-count right">
          <i @click="itemCountMinus" class="fas fa-minus countBtn"></i>
          {{item.count}}
          <i @click="itemCountPlus" class="fas fa-plus countBtn"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props:{
      item:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    data(){
      return{
        itemSelectFlag:false,
      }
    },
    methods:{
      itemClickAdd(){
        this.itemSelectFlag = ! this.itemSelectFlag;
        this.$store.dispatch("addToCheckOut",this.item);
      },
      itemClickRemove(){
        this.itemSelectFlag = ! this.itemSelectFlag;
        this.$store.dispatch("removeToCheckOut",this.item);
      },
      itemCountPlus(){
        this.$store.dispatch("cartItemCountPlus",this.item);
      },
      itemCountMinus(){
        this.$store.dispatch("cartItemCountMinus",this.item)
      }
    }
  }
</script>

<style scoped>
  .cartlistitem{
    width: 100%;
    display: flex;
    padding:5px;
    border-bottom: 1px solid #ccc;

  }
  .item-selector{
    width: 20px;
    margin: auto 10px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title,.item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom .item-price{
    color: orangered;
  }
  .item-count{
    position: absolute;
    right: 10px;
    bottom: -2px;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 10px;

  }
  .countBtn{
    margin: auto 5px;
    color: gray;
  }
</style>