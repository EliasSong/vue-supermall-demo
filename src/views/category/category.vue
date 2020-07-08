<template>
  <div id="category">
    <CategoryNavbar>
      <div slot="middle">商品分类</div>
    </CategoryNavbar>

    <div class="categoryContent">
      <div class="contentLeft">
        woshizuobian
      </div>
      <div class="contentRight">
        <CategoryScroll class="ScrollArea"
                        ref="CategoryScroll">
                  <img v-for="(item,index) in subList" :key="index" :src="item.image" alt="">
        </CategoryScroll>

      </div>
    </div>

  </div>
</template>

<script>
  import CategoryScroll from "../../components/common/scroll/scroll";
  import CategoryNavbar from "../../components/common/navbar/navbar";
  import {getCategory,getSubcategory,getCategoryDetail} from "../../network/category";
  // import CategorySubNavbar from "./ChildrenComponents/CategorySubNavbar";

  export default {
    name: "Category",
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
    components:{
      CategoryNavbar,
      CategoryScroll,
      // CategorySubNavbar
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
    width: 120px;
    background-color: red;
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
