import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    cartList:[],
    totalPrice:0,
    totalCount:0,
    totalPriceString:"0",
    totalCountString:"0"
  },
  mutations:{
    addCounter(state , payload){
      payload.count+=1;
    },
    addToCart(state, payload){
      state.cartList.push(payload);
    },
    addToCheckOut(state, payload){
      state.totalPrice += Number(payload.count) * Number(payload.price);
      state.totalCount += Number(payload.count);
      state.totalPriceString = state.totalPrice.toFixed(2);
      state.totalCountString = state.totalCount.toFixed(0);
    },
    removeToCheckOut(state, payload){
      state.totalPrice -= Number(payload.count) * Number(payload.price);
      state.totalCount -= Number(payload.count);
      state.totalPriceString = state.totalPrice.toFixed(2);
      state.totalCountString = state.totalCount.toFixed(0);
    }
  },
  actions:{
    addToCart(context, payload){
      let product  = context.state.cartList.find(item => item.iid === payload.iid)
      if(product){
        context.commit("addCounter",product);
      }
      else {
        payload.count = 1;
        context.commit("addToCart",payload);
      }
    },


  }
})

export default store;