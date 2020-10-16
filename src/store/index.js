import Vue from "vue"
import Vuex from "vuex"
import {  reqLogin } from "../untils/request"
Vue.use(Vuex)

import login from "./modules/login"
import register from "./modules/register"
import home from './modules/home'
import fenlei from "./modules/fenlei"
import list from './modules/list'
import detail from './modules/detail'
import shop from './modules/shop'
export default new Vuex.Store({
    //state 状态
    state:{
        loginInfo: {},//登录信息
    },
    //修改state
    mutations:{
        //修改登录信息
    changeloginList(state, arr) {
        console.log('changeloginList');
          state.loginInfo = arr
      }
    },
    //组件派发的动作
    actions:{
        //组件触发登录请求
    async requestloginList(context,loginList) {
        await reqLogin(loginList).then(res => {
            context.commit("changeloginList", res.data)
        })
    }
    },
    //导出数据
    getters:{
        loginInfo(state) {
                return state.loginInfo
            }
    },
    //模块
    modules:{
        login:login,
        register:register,
        home:home,
        fenlei:fenlei,
        list:list,
        detail:detail,
        shop:shop
    }
})