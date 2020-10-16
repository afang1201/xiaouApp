import {getShop,delShop,editShop} from '../../untils/request'
const state={
   //购物车商品信息
   shopList: [],
}

const mutations={
  changeShoplist(state,arr){
    state.shopList=arr
  }
}

const actions={
  //获取购物车商品列表信息
  async requestShoplist(context,uid){
    await getShop(uid).then(res=>{
      context.commit('changeShoplist',res.data.list)
    })
  },
  //修改购物车
  reqEditshop(context,info){
      editShop(info).then(res=>{
     
      })
  },
  //删除购物车
  reqDelshop(context,id){
    delShop(id).then(res=>{
      alert('删除成功')
    })
  }
}
const getters={
  shopList(state){
    return state.shopList
  }
}
export default{
  state,
  mutations,
  actions,
  getters,
  namespaced:true
}