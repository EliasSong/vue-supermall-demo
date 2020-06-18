import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid,
    }
  })

}
export function getRecommandDate() {
  return request({
    url: '/recommend'
  })
}
export class DetailGood {
  constructor(itemInfo , columns ,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
    this.topImages = itemInfo.topImages;
  }
}
export class DetailShop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}