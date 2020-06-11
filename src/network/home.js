import {request} from "./request";

export function getHomeData(){
  return request({
    url:"/home/multidata",
    method:"GET"
  })
}

export function getHomeGoods(type,page){
  return request({
    url: "/home/data",
    method: "GET",
    params: {
      type,
      page
    }
  });
}