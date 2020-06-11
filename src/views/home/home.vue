<template>
  <div id="home">
    <HomeNavbar>
      <div slot="middle">购物街</div>
    </HomeNavbar>
    <HomeTabControl
      ref="HomeTabControl2"
      @tabClick="tabChange"
      :titles="titles"
      class="HomeTabbarControl"
      v-show="tabbarControlFixedFlag">
    </HomeTabControl>
    <HomeScroll class="ScrollArea"
                ref="HomeScroll"
                @scroll="contentScroll"
                @pullingUp="loadMore"
                :probe-type="3"
                :pull-up-load="true">
    <HomeCarousel :banner="banner"></HomeCarousel>
    <HomeRecommendViewer :recommend="recommend"></HomeRecommendViewer>
    <HomeFeatureView></HomeFeatureView>
    <HomeTabControl
      ref="HomeTabControl1"
      @tabClick="tabChange"
      :titles="titles"
      v-show="!tabbarControlFixedFlag">
    </HomeTabControl>
    <HomeGoodsViews :goods="goods[currentTabLabel].list"></HomeGoodsViews>
    </HomeScroll>
    <HomeBackTop v-show="backBtnShowFlag" @click.native="backClick"></HomeBackTop>

  </div>

</template>

<script>
  import HomeNavbar from "../../components/common/navbar/navbar"
  import HomeScroll from "../../components/common/scroll/scroll";
  import HomeCarousel from "./ChildrenComponents/HomeCarousel";
  import HomeRecommendViewer from "./ChildrenComponents/HomeRecommendView";
  import HomeFeatureView from "./ChildrenComponents/HomeFeatureView";
  import HomeTabControl from "../../components/content/tabControl/tabcontrol";
  import HomeGoodsViews from "../../components/content/goodsview/goodsview";
  import HomeBackTop from "../../components/content/backtop/backtop";
  import {getHomeData,getHomeGoods} from "../../network/home";
  export default {
    name: "home",
    components:{
      HomeNavbar,
      HomeRecommendViewer,
      HomeCarousel,
      HomeFeatureView,
      HomeTabControl,
      HomeGoodsViews,
      HomeScroll,
      HomeBackTop,
    },
    data(){
      return {
        homeData: null,
        banner: [],
        recommend: [],
        currentTabLabel:"pop",
        titles: ['流行','新款','精选'],
        indexTypeMap:["pop","new","sell"],
        backBtnShowFlag:false,
        tabbarControlOffsetTop:0,
        tabbarControlFixedFlag:false,
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]},
        }

      }
    },
    created() {
      this.getHomeData()
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    mounted() {
    },
    updated() {
      this.scrollAreaRefresh();
      this.setTabbarControlOffsetTop();

    },
    methods:{
      tabChange(index){
        this.currentTabLabel = this.indexTypeMap[index];
        this.$refs.HomeTabControl2.currentIdx=index;
        this.$refs.HomeTabControl1.currentIdx=index;
       },
      backClick(){
        this.$refs.HomeScroll.scroll.scrollTo(0,0,800);
      },
      contentScroll(position){
        //判断backtop是否显示
        if(position.y<-500){
          this.backBtnShowFlag = true;
        }
        else{
          this.backBtnShowFlag = false;
        }
        //判断吸顶
        if(position.y<-this.tabbarControlOffsetTop){
          this.tabbarControlFixedFlag = true;
        }
        else{
          this.tabbarControlFixedFlag = false;
        }

      },
      scrollAreaRefresh(){
        this.$refs.HomeScroll.scroll.refresh();
      },
      loadMore(){
        this.getHomeGoods(this.currentTabLabel);
        this.$refs.HomeScroll.scroll.finishPullUp();
      },

      setTabbarControlOffsetTop(){
        if(this.$refs.HomeTabControl1.$el.offsetTop !== 0){
          this.tabbarControlOffsetTop=this.$refs.HomeTabControl1.$el.offsetTop;
        }
      },

      getHomeData() {
        getHomeData().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      }

    }
  }
</script>

<style scoped>
  #home{
    margin-bottom: 70px;

  }
  .ScrollArea{
    /*margin-top: 44px;*/
    height: calc(100vh - 70px - 44px);
    overflow: hidden;
  }
  .HomeTabbarControl{
    position: relative;
    z-index: 1;
  }



</style>