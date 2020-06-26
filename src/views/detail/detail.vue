<template>
  <div class="detail" >
    <DetailNavbar class="detailnavbar">
      <div slot="left" @click="backClick">
        <i class="fas fa-arrow-left"></i>
      </div>
      <div slot="middle" class="title">
        <div v-for="(item,index) in titles"
             :key="index"
             class="titleItem"
             @click="titleItemClick(index)"
             :class="{active:index === currentIdx}">
          {{item}}
        </div>
      </div>
    </DetailNavbar>
    <DetailScroll
    :probe-type="3"
    :pull-up-load="true"
    class="scroll"
    @scroll="contentScroll"
    ref="detailScroll">
      <DetailCarousel ref="good" class="carousel" :banner="detailGoodData.topImages"></DetailCarousel>
      <DetailBaseInfo class="baseInfo" :good="detailGoodData"></DetailBaseInfo>
      <DetailShopInfo class="shopInfo" :shop="detailShopData"></DetailShopInfo>
      <DetailImageInfo class="imageInfo" :image="detailImageData"></DetailImageInfo>
      <DetailGoodParamsInfo ref="params" :good-params="detailGoodParamsData"></DetailGoodParamsInfo>
      <DetailCommentsInfo ref="comments" :comments="detailCommentsData"></DetailCommentsInfo>
      <DetailRecommendInfo ref="recommend" class="recommend" :goods="detailRecommendData"></DetailRecommendInfo>
    </DetailScroll>
    <DetailBottomBar @addCartSignal="addToCart"></DetailBottomBar>
    <DetailBacktop @click.native="backTopBtnClick" v-show="backTopBtnShowFlag"></DetailBacktop>
  </div>
</template>

<script>
  import DetailCarousel from "./ChildrenComponents/DetailCarousel";
  import DetailNavbar from "../../components/common/navbar/navbar";
  import DetailBaseInfo from "./ChildrenComponents/DetailBaseInfo";
  import DetailShopInfo from "./ChildrenComponents/DetailShopInfo";
  import DetailScroll from "../../components/common/scroll/scroll";
  import DetailImageInfo from "./ChildrenComponents/DetailImageInfo";
  import DetailBacktop from "../../components/content/backtop/backtop";
  import DetailGoodParamsInfo from "./ChildrenComponents/DetailGoodParamsInfo";
  import DetailCommentsInfo from "./ChildrenComponents/DetailCommentsInfo";
  import DetailRecommendInfo from "../../components/content/goodsview/goodsview";
  import DetailBottomBar from "./ChildrenComponents/DetailBottomBar";
  import {getDetailData,getRecommandDate,DetailGood,DetailShop} from "../../network/detail";
  export default {
    name: "detail",
    data(){
      return {
        iid:0,
        detailGoodData:{},
        detailGoodParamsData:{},
        detailShopData:{},
        detailImageData:{},
        detailCommentsData:{},
        detailRecommendData:[],
        backTopBtnShowFlag:false,
        titles:["商品","参数","评论","推荐"],
        currentIdx:0,
        titlesTopY:[0,0,0,0],
      }
    },
    methods:{
      addToCart(){
        const product = {};
        product.image = this.detailGoodData.topImages[0];
        product.title = this.detailGoodData.title;
        product.desc = this.detailGoodData.desc;
        product.price = this.detailGoodData.realPrice;
        product.iid = this.iid;
        this.$store.dispatch("addToCart",product);
        console.log(this.$store.state.cartList);
      },
      titleItemClick(index){
        this.currentIdx = index;
        this.$refs.detailScroll.scroll.scrollTo(0,-this.titlesTopY[index],300);
      },
      backClick(){
        this.$router.back();
      },
      backTopBtnClick(){
        this.$refs.detailScroll.scroll.scrollTo(0,0,500);
      },
      contentScroll(position){
        if(position.y<-500){
          this.backTopBtnShowFlag = true;
        }
        else{
          this.backTopBtnShowFlag = false;
        }
        if(-position.y < this.titlesTopY[1])
        {
          this.currentIdx = 0;
        }
        else if(-position.y < this.titlesTopY[2]){
          this.currentIdx = 1;
        }
        else if(-position.y < this.titlesTopY[3]){
          this.currentIdx = 2;
        }
        else{
          this.currentIdx = 3;
        }
      },
      setTitleTopY(){
        this.titlesTopY[0] = this.$refs.good.$el.offsetTop;
        this.titlesTopY[1] = this.$refs.params.$el.offsetTop;
        this.titlesTopY[2] = this.$refs.comments.$el.offsetTop;
        this.titlesTopY[3] = this.$refs.recommend.$el.offsetTop;

      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetailData(this.iid).then(res => {
        this.detailGoodData = new DetailGood(res.result.itemInfo,res.result.columns,res.result.shopInfo.services);
        this.detailShopData = new DetailShop(res.result.shopInfo);
        this.detailImageData = res.result.detailInfo;
        this.detailGoodParamsData = res.result.itemParams;
        if(res.result.rate.cRate !== 0){
          this.detailCommentsData = res.result.rate.list[0];
        }
      })
      getRecommandDate().then(res => {
        this.detailRecommendData = res.data.list;
      })
    },
    updated() {
      this.$refs.detailScroll.scroll.refresh();
      this.setTitleTopY();
    },
    components:{
      DetailNavbar,
      DetailCarousel,
      DetailBaseInfo,
      DetailShopInfo,
      DetailScroll,
      DetailImageInfo,
      DetailBacktop,
      DetailGoodParamsInfo,
      DetailCommentsInfo,
      DetailRecommendInfo,
      DetailBottomBar,

    }
  }
</script>

<style scoped>
  .detail{
    background-color: whitesmoke;
    position: relative;
    z-index: 1;


  }
  .title{
    display: flex;
    font-size: 1rem;

  }
  .titleItem{
    flex: 1;
    height: 40px;
    border-bottom: 2px solid whitesmoke;
    transition:all 0.5s;
    transition-timing-function: ease;
    -webkit-transition:all 0.5s; /* Safari */
    -webkit-transition-timing-function: ease;
  }
  .carousel{
    height: 500px;
    overflow: hidden;
  }
  .baseInfo{
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
  }
  .active{
    color: gray;
    border-bottom-color: gray;

  }
  .scroll{
    height: calc(100vh  - 44px - 70px);
    margin-top:44px;
    margin-bottom: 70px;
  }
  .detailnavbar{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    background-color: whitesmoke;
    z-index: 9;
    width: 375px;
  }
  .shopInfo{
    background-color: whitesmoke;
  }
  .recommend{
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  }
</style>