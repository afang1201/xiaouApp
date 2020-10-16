import {reqGetFenleiList} from '../../untils/request'
const state ={
  // 列表数据
  fenleiList: []
}

const mutations={
  changeFenleiList(state,arr){
    state.fenleiList=arr
  }
}

const actions={
  async requestFenleiList(context){
    if(context.state.fenleiList.length>0){
      return
    }
    await reqGetFenleiList().then(res=>{
      context.commit('changeFenleiList',res.data.list)
    })
  }
}

const getters={
  fenleiList(state){
    return state.fenleiList
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}