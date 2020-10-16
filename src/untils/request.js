import axios from "axios"
import store from '../store'
// 请求拦截
axios.interceptors.request.use(req => {
  console.log(req.url);
  if (req.url !== '/api/api/login') {
    console.log( store.state.loginInfo)
    req.headers.authorization = store.state.loginInfo.list.token
  }
  console.log(req)
  return req
})
//打印发起的ajax请求
axios.interceptors.response.use(res => {
  console.log("本次请求地址是：" + res.config.url);
  console.log(res);
  return res;
})
let baseUrl = "/api"
//登录请求
export const reqLogin = (loginList) => {
  return axios({
      url: baseUrl + "/api/login",
      method:'post',
      data:loginList
  })
}
//注册请求
export const reqRegister=(registerList)=>{
  return axios({
    url:baseUrl+'/api/register',
    method:'post',
    data:registerList
  })
}
//获取主页商品请求
export const reqGetShopList=()=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/getindexgoods'
  })
}
//获取分类列表数据请求
export const reqGetFenleiList=()=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/getcatetree'
  })
}
//获取列表商品数据请求
export const reqGetList=(fid)=>{
  return axios({
    method:'get',
    params:{fid},
    url:baseUrl+'/api/getgoods'
  })
}
//获取商品详情请求
export const reqGetInfo=(id)=>{
  return axios({
    method:'get',
    params:{id},
    url:baseUrl+'/api/getgoodsinfo'
  })
}
//添加购物车请求
export const reqCartadd=(info)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/cartadd',
    data:info
  })
}
//获取购物车商品请求
export const getShop=(uid)=>{
  return axios({
    method:'get',
    params:{uid},
    url:baseUrl+'/api/cartlist'
  })
}
//购物车修改请求
export const editShop=(info)=>{
  return axios({
    url:baseUrl+'/api/cartedit',
    method:'post',
    data:info
  })
}
//购物车删除请求
export const delShop=(id)=>{
  return axios({
    url:baseUrl+'/api/cartdelete',
    method:'post',
    data:{id}
  })
}