import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    cartList:[],
  },
  mutations:{
    addCounter(state , payload){
      payload.count+=1;
    },
    addToCart(state, payload){
      state.cartList.push(payload);
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
    }

  }
})

export default store;