import {  reqLogin } from "../../untils/request"
const state = {
   loginInfo: {},//登录信息
}

const mutations = {
    //修改登录信息
    changeloginList(state, arr) {
      console.log('changeloginList');
        state.loginInfo = arr
    }
}

const actions = {
    //组件触发登录请求
    requestloginList(context,loginList) {
        //缓存
        if (context.state.loginInfo.length > 0) {
            return;
        }
        reqLogin(loginList).then(res => {
            context.commit("changeloginList", res.data)
            if(res.data.code!=200) alert('登录失败请检查账号密码')
            localStorage.setItem('uid',res.data.list.uid)
        })
    }
}

const getters = {
//   loginInfo(state) {
//     console.log(state.loginInfo)
//         return state.loginInfo
//     }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}