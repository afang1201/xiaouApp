import {reqGetList} from '../../untils/request'

const state ={
  //商品信息
  shopList:[]
}

const mutations={
  //改变商品信息
  changeShoplist(state,arr){
    state.shopList=arr
  }
}

const actions={
  requestShopList(context,fid){
    //缓存
    // if(context.state.shopList.length>0){
    //   return
    // }
    reqGetList(fid).then(res=>{
      context.commit('changeShoplist',res.data.list)
    })
  }
}

const getters ={
  shopList(state){
    return state.shopList
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}