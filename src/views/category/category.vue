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

  export default {
    name: "category",
    data(){
      return {
        currentIdx:0,
        mainList:[],
        subList:[],
        categoryDetail:
          {
            "pop":[],
            "new":[],
            "sell":[]
          },
        currentDetailType:"pop",
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
            this.categoryDetail[this.currentDetailType] = res;

          })
        })

      }
    },
    components:{
      CategoryNavbar,
      CategoryScroll,
      CategorySubNavbar,
      CategoryImageView,
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
            this.categoryDetail[this.currentDetailType] = res;
          })
        })
      })

    }
  }
</script>

<style scoped>
  .categoryContent{
    display: flex;
    width: 100%;
  }
  .contentLeft{
    width: 80px;
  }
  .contentRight{
    flex: 1;

    height: calc(100vh - 70px - 44px);
  }
  .ScrollArea{
    height: 100%;
    background-color: #fff;

    overflow: hidden;
  }
</style>
