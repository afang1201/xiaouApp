<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航 -->
    <div class="footer">
      <div class="nav" is="router-link" to="/index/home" active-class="nav-select-text">
        <img :src="$route.path==='/index/home'?'/static/img/home/tab_home_hig.png':'/static/img/home/tab_home_nor.png'" class="nav-img" />
        <div>首页</div>
      </div>
      <div class="nav" is="router-link" to="/index/fenlei" active-class="nav-select-text">
        <img :src="$route.path==='/index/fenlei'?'/static/img/home/tab_menu_hig.png':'/static/img/home/tab_menu_nor.png'" class="nav-img" />
        <div >分类</div>
      </div>
      <div class="nav" is="router-link" to="/index/shop" active-class="nav-select-text">
        <img :src="$route.path==='/index/shop'?'/static/img/home/tab_shopping_hig.png':'/static/img/home/tab_shopping_nor.png'"  class="nav-img" />
        <div >购物车</div>
      </div>
      <div class="nav" is="router-link" to="/index/mine" active-class="nav-select-text">
        <img :src="$route.path==='/index/mine'?'/static/img/home/tab_me_hig.png':'/static/img/home/tab_me_nor.png'"  class="nav-img" />
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 底部导航 */
.footer {
  width: 100%;
  height: 1.02rem;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #eee;
  display: flex;
}
.nav {
  flex: 1;
  text-align: center;
  color: #000000;
}
.nav-img {
  width: 0.32rem;
  height: 0.32rem;
  margin-top: 0.16rem;
}
.nav-select-text {
  color: #f90;
}
</style>