<template>
  <div id="category">
    <CategoryNavbar>
      <div slot="middle">商品分类</div>
    </CategoryNavbar>
    <div class="categoryContent">
      <div class="contentLeft">
        <CategorySubNavbar @subNavbarCurrentIdxSignal="subNavbatIndexChange" :main-list="mainList"></CategorySubNavbar>
      </div>
      <div class="contentRight">
        <CategoryScroll class="ScrollArea"
                        ref="CategoryScroll">
          <CategoryImageView :sub-list="subList"></CategoryImageView>
          <CategoryGoodsControlbar @categoryGoodsTabChangeSignal="goodListChange"></CategoryGoodsControlbar>
          <CategoryGoodsview :goods="goodList"></CategoryGoodsview>
        </CategoryScroll>

      </div>
    </div>

  </div>
</template>

<script>
  import CategoryScroll from "../../components/common/scroll/scroll";
  import CategoryNavbar from "../../components/common/navbar/navbar";
  import {getCategory,getSubcategory,getCategoryDetail} from "../../network/category";
  import CategorySubNavbar from "./ChildrenComponents/CategorySubNavbar";
  import CategoryImageView from "./ChildrenComponents/CategoryImageView";
  import CategoryGoodsview from "./ChildrenComponents/CategoryGoodsview";
  import CategoryGoodsControlbar from "./ChildrenComponents/CategoryGoodsControlbar";



  export default {
    name: "category",
    data(){
      return {
        currentIdx:0,
        mainList:[],
        subList:[],
        TypeList:["pop","new","sell"],
        currentDetailType:"pop",
        goodList:[]
      }
    },
    methods:{
      subNavbatIndexChange(index){
        this.currentIdx = index;

        getSubcategory(this.mainList[this.currentIdx].maitKey).then(res => {
          this.$refs.CategoryScroll.scroll.stop();
          this.$refs.CategoryScroll.scroll.scrollTo(0,0,0);
          this.subList = res.data.list;
          getCategoryDetail(this.mainList[this.currentIdx].miniWallkey,this.currentDetailType).then(res => {
            this.goodList = res;

          })
        })

      },
      goodListChange(index){
        this.currentDetailType = this.TypeList[index]
        getCategoryDetail(this.mainList[this.currentIdx].miniWallkey,this.currentDetailType).then(res => {
          this.goodList = res;
        })

      }
    },
    components:{
      CategoryNavbar,
      CategoryScroll,
      CategorySubNavbar,
      CategoryImageView,
      CategoryGoodsview,
      CategoryGoodsControlbar,

    },
    created() {
      getCategory().then(res => {
        this.mainList = res.data.category.list;
        this.currentIdx = 0;
        // this.currentMaitKey = this.mainList[0].maitKey;
        // this.currentMiniWallKey = this.mainList[0]
        getSubcategory(this.mainList[this.currentIdx].maitKey).then( res => {
          this.subList = res.data.list;
          getCategoryDetail(this.mainList[this.currentIdx].miniWallkey,this.currentDetailType).then(res => {
            this.goodList = res;
          })
        })
      })
    },
    updated() {
      this.$refs.CategoryScroll.scroll.refresh()
    }
  }
</script>

<style scoped>
  .categoryContent{
    display: flex;
    width: 100%;
    margin-top: 44px;
    height: calc(100vh - 70px - 44px)

  }
  .contentLeft{
    flex: 1;
    height: calc(100vh - 70px - 44px)
  }
  .contentRight{
    width: 80%;


    height: calc(100vh - 70px - 44px);
  }
  .ScrollArea{
    height: 100%;
    background-color: #fff;
    overflow: hidden;
  }
</style>
