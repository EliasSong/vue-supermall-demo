import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    cartList:[],
    cartCheckOutList:[],
    totalPrice:0,
    totalCount:0,
    totalPriceString:"0",
    totalCountString:"0"
  },
  mutations:{
    addCounter(state , payload){
      payload.count+=1;
    },
    minusCounter(state, payload){
      payload.count-=1;
    },
    addToCart(state, payload){
      state.cartList.push(payload);
    },
    totalResultShow(state,){
      state.totalPriceString = state.totalPrice.toFixed(2);
      state.totalCountString = state.totalCount.toFixed(0);
    }
  },
  getters:{
    allCheckFlag(state) {
          return state.cartList.length === state.cartCheckOutList.length
    },
    itemSelectFlag(state){
      return payload => {
        let product = state.cartCheckOutList.find(item => item.iid === payload.iid)
        if(product){
          return true;
        }
        else{
          return false;
        }
      }
    }
    },

  actions:{
    addToCart(context, payload){
      return new Promise((resolve) => {
        let product  = context.state.cartList.find(item => item.iid === payload.iid)
        if(product){
          context.commit("addCounter",product);
          resolve("商品数目+1");
        }
        else {
          payload.count = 1;
          context.commit("addToCart",payload);
          resolve("已添加到购物车");
        }
      })


    },
    addToCheckOut(context,payload){
      context.state.cartCheckOutList.push(payload)
      context.dispatch("totalResultCaculate");
      context.commit("totalResultShow");
    },
    removeToCheckOut(context,payload){
      let index = context.state.cartCheckOutList.findIndex(item => item === payload);
      context.state.cartCheckOutList.splice(index,1);
      context.dispatch("totalResultCaculate");
      context.commit("totalResultShow");
    },
    totalResultCaculate(context,){
      context.state.totalPrice = 0;
      context.state.totalCount = 0;
      for(let i =0;i<context.state.cartCheckOutList.length;i++){
        context.state.totalPrice += Number(context.state.cartCheckOutList[i].price) * Number(context.state.cartCheckOutList[i].count);
        context.state.totalCount += Number(context.state.cartCheckOutList[i].count);
      }

    },
    cartItemCountPlus(context, payload){
      let product  = context.state.cartList.find(item => item.iid === payload.iid)
      if(product){
        context.commit("addCounter",product);
        context.dispatch("totalResultCaculate");
        let checkProduct = context.state.cartCheckOutList.find(item => item.iid === payload.iid)
        {
          if(checkProduct){
            context.commit("totalResultShow");
          }
        }
      }
      else{
        console.log("error");
      }
    },
    cartItemCountMinus(context,payload){
      let product  = context.state.cartList.find(item => item.iid === payload.iid);
      if(product && product.count > 1){
        context.commit("minusCounter",product)
        context.dispatch("totalResultCaculate");
        let checkProduct = context.state.cartCheckOutList.find(item => item.iid === payload.iid)
        {
          if(checkProduct){
            context.commit("totalResultShow");
          }
        }
      }
    },
    allAddToCheckOut(context){
      context.state.cartCheckOutList.length = 0;
      for(let i = 0 ;i<context.state.cartList.length;i++){
        context.state.cartCheckOutList.push(context.state.cartList[i]);
      }

      context.dispatch("totalResultCaculate");
      context.commit("totalResultShow");

    },
    allRemoveToCheckOut(context){
      context.state.cartCheckOutList.splice(0,context.state.cartCheckOutList.length);
      context.dispatch("totalResultCaculate");
      context.commit("totalResultShow");
    }
  }
})

export default store;