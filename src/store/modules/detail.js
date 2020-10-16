import {reqGetInfo,reqCartadd} from '../../untils/request'

const state={
  //商品详情信息
  shopInfo:''
}

const mutations ={
  changeShopInfo(state,arr){
    state.shopInfo=arr
  }
}

const actions ={
  //获取信息
  async requestShopInfo(context,id){
    //数据不同不能缓存
    // if(context.state.shopInfo.length>0){
    //   return
    // }
    await reqGetInfo(id).then(res=>{
      context.commit('changeShopInfo',res.data.list[0])
    })
  },
  //提交添加购物车请求
  async requestCartadd(context,info){
    console.log(info);
    await reqCartadd(info).then(res=>{
      alert('加入成功')
    })
  }
}
const getters={
  shopInfo(state){
    return state.shopInfo
  }
}
export default{
  state,
  mutations,
  actions,
  getters,
  //必须加
  namespaced: true
}