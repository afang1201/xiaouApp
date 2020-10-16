import {reqGetShopList} from '../../untils/request'

const state ={
  //商品信息
  shopList: [],
}

const mutations={
  //修改商品信息
  changeShopList(state,arr){
    state.shopList=arr
  }
}

const actions ={
  //触发获取商品信息请求
  requestShopList(context){
    //缓存
    if(context.state.shopList.length>0){
      return
    }
    reqGetShopList().then(res=>{
      context.commit('changeShopList',res.data.list[0].content)
    })
  }
}

const getters={
  shopList(state){
    return state.shopList
  }
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}