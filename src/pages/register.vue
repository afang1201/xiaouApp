<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <span>注册</span>
      <a href="#/register" class="a" is='router-link' to='/login'>返回</a>
    </div>
    <!-- 注册输入框 -->
    <div class="input">
      <div class="line1">
        <div class="text">手机号：</div>
        <input type="text" class="ipt" v-model="registerList.phone" />
      </div>
       <div class="line1 line2">
        <div class="text">昵称：</div>
        <input type="text" class="ipt" v-model="registerList.nickname" />
      </div>
      <div class="line1 line2">
        <div class="text">密 码：</div>
        <input type="text" class="ipt"  v-model="registerList.password" />
      </div>
    </div>
    <div class="btn" @click="register">注册</div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
  data(){
    return{
      //注册信息
      registerList:{
        phone:'',
        nickname:'',
        password:''
      }
    }
  },
  methods:{
    //注册按键触发注册请求
    // async register(){
    //   const {data:data} =await this.$axios.post('/api/api/register',this.registerList)
    //   alert(data.msg)
    //   if(data.code===200) {
    //     this.$router.push('/login')
    //   }
    // }
    ...mapActions({
     'requestRegisterInfo':'register/requestRegisterInfo'
    }),
    //此处必须定义async await 否则无法获取registerInfo数据
    async register(){
      await this.requestRegisterInfo(this.registerList)
      alert(this.registerInfo.msg)
      if(this.registerInfo.code===200){
        this.$router.push('/login')
      }
    }

  },
  computed:{
    ...mapGetters({
      'registerInfo':'register/registerInfo'
    })
  }
}
</script>

<style scoped>
/* 头部样式 */
.header {
  height: 0.8rem;
  background: #f90;
  text-align: center;
  line-height: 0.8rem;
  position: relative;
}
.header span {
  font-size: 0.38rem;
  color: #fff;
}
.header .a {
  width:  0.8rem;
  position: absolute;
  left: 0.2rem;
  color: #fff;
  font-size: 0.38rem;
  text-decoration: none;
  position: absolute;
  right: 0.3rem;
}
/* 输入框 */
.input{
    width: 5.98rem;
    margin: 2.46rem auto 0;
}
.line1{
    height: .78rem;
    border-bottom: .01rem solid #a3a3a3;
    display: flex;
}
.text[data-v-e1641f7e] {
    width: 1.02rem;
    font-size: .28rem;
    color: #333;
}
.ipt{
    flex: 1;
    border: none;
    font-size: .28rem;
    margin-top: -.4rem;
    outline: none;
    border: none;
    /* background: #fafafa; */
}
.line2{
    margin-top: .56rem;
}
.btn{
    width: 5.98rem;
    height: 1rem;
    background: #f90;
    color: #fff;
    font-size: .34rem;
    text-align: center;
    line-height: 1rem;
    border-radius: .2rem;
    margin: 0.3rem auto;
}
</style>