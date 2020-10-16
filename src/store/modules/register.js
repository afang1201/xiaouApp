import { reqRegister } from "../../untils/request"
const state = {
   registerInfo: {},//注册信息
}

const mutations = {
    //修改注册信息
    changeRegisterInfo(state, arr) {
        state.registerInfo = arr
    }
}

const actions = {
    //组件触发注册请求
    async requestRegisterInfo(context,loginList) {
        //缓存
        if (context.state.registerInfo.length > 0) {
            return;
        }
        await reqRegister(loginList).then(res => {
            context.commit("changeRegisterInfo", res.data)
        })
        // console.log(context.state.registerInfo);
    }
}

const getters = {
  registerInfo(state) {
        return state.registerInfo
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}