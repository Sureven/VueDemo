import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    arr:[]
  },
  mutations:{
    reduceNum:((state,index)=> {
      if (state.arr[index].num == 0){
        state.arr[index].splice(index,1)
      } else {
        state.arr[index].num--
      }
    }),
    addNum:((state,index)=>{
      state.arr[index].num++
    } ),
    deleteGoods(state,index){
      state.arr.splice(index,1);
    },
    addGoods(state,info){
      let isOwn = state.arr.some(function(item){
        if(item.id == info.id){
          item.num++;
          return true;
        }else{
          return false;
        }
      });
      if(!isOwn){
        state.arr.push({id:info.id,name:info.name,price:info.price,num:1});
      }
    },
    clearcar:(state=>{
      state.arr=[]
    })
  },
  actions:{
    addGoods:(context,params) =>{
      context.commit('addGoods',params);
    },
    addNum:(context,params) =>{
      context.commit('addNum',params);
    },
    reduceNum({commit},params){
      commit('reduceNum',params);
    },
    deleteGoods({commit},params){
      commit('deleteGoods',params);
    },
    clearcar:(context,params)=>{
      context.commit('clearcar',params);
    }
  },
  getters:{
    totalMoney(state){
      let money = 0;
      for(let i =0;i<state.arr.length;i++){
        money += parseInt(state.arr[i].price.substring(1))*state.arr[i].num;
      }
      return money;
    }
  }
})
export default  store
