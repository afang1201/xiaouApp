<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <span>登录</span>
      <a href="#/register" class="a" is="router-link" to="/register">注册</a>
    </div>
    <!-- 登录注册输入框 -->
    <div class="input">
      <div class="line1">
        <div class="text">账 号：</div>
        <input type="text" class="ipt" v-model="loginList.phone" />
      </div>
      <div class="line1 line2">
        <div class="text">密 码：</div>
        <input type="text" class="ipt" v-model="loginList.password" />
      </div>
      <div class="forget">忘记密码</div>
    </div>
    <div class="btn" @click="login">登录</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      //登录信息
      loginList: {
        phone: '',
        password: '',
      },
    }
  },
  methods: {
    //登录按键触发登录请求
    // async login(){
    //   const {data:data} =await this.$axios.post('/api/api/login',this.loginList)
    //   if(data.code!==200) alert('登录失败请检查账号密码')
    //   localStorage.setItem('uid',data.list.uid)
    //   this.$router.push('/index/home')
    //   console.log(data)
    // }
    ...mapActions({
      requestLoginList: 'requestloginList',
    }),
    async login() {
      await this.requestLoginList(this.loginList)
      if (this.loginInfo.code != 200) {
        alert('登录失败请检查账号密码')
        this.$router.push('/login')
        return
      }
      localStorage.setItem('uid', this.loginInfo.list.uid)
      await this.$router.push('/index/home')
    },
  },
  computed: {
    ...mapGetters({
      loginInfo: 'loginInfo',
    }),
  },
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
  float: right;
  color: #fff;
  font-size: 0.38rem;
  text-decoration: none;
  position: absolute;
  right: 0.3rem;
}
/* 输入框 */
.input {
  width: 5.98rem;
  margin: 2.46rem auto 0;
}
.line1 {
  height: 0.78rem;
  border-bottom: 0.01rem solid #a3a3a3;
  display: flex;
}
.text[data-v-e1641f7e] {
  width: 1.02rem;
  font-size: 0.28rem;
  color: #333;
}
.ipt {
  flex: 1;
  border: none;
  font-size: 0.28rem;
  margin-top: -0.4rem;
  outline: none;
  border: none;
  /* background: #fafafa; */
}
.line2 {
  margin-top: 0.56rem;
}
.forget {
  font-size: 0.24rem;
  color: #666;
  text-align: right;
  margin-top: 0.44rem;
  margin-bottom: 0.3rem;
}
.btn {
  width: 5.98rem;
  height: 1rem;
  background: #f90;
  color: #fff;
  font-size: 0.34rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
  margin: 0 auto;
}
</style>