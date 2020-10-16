<template>
  <!-- 页面内容 -->
  <div class="con">
    <!-- 头部 -->
    <div class="header">
      <img src="/static/img/home/logo.jpg" alt class="logo" />
      <div class="search-wrap">
        <!-- 头部搜索框 -->
        <div class="search">寻找商品</div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="tuijian">
      <!-- 轮播图 -->
      <div class="banner">
        <lun-bo></lun-bo>
      </div>
      <!-- 限时抢购 -->
      <div class="min-box">
        <div class="eve">
          <img src="/static/img/home/1.jpg" alt />
          <div>限时抢购</div>
        </div>
        <div class="eve">
          <img src="/static/img/home/1.jpg" alt />
          <div>积分商城</div>
        </div>
        <div class="eve">
          <img src="/static/img/home/1.jpg" alt />
          <div>联系我们</div>
        </div>
        <div class="eve">
          <img src="/static/img/home/1.jpg" alt />
          <div>商品分类</div>
        </div>
      </div>
      <!-- 商品列表---动态渲染 -->
      <div class="list">
        <a :href="'#/detail?id='+item.id" class="item" v-for="item in shopList" :key="item.id">
          <img :src="'/static/img'+item.img" class="item-img" />
          <div class="item-con">
            <div class="goodsname">{{item.goodsname}}</div>
            <div class="price">￥{{item.price | filterPrice}}</div>
            <div class="btn">立即抢购</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import shopVue from './shop.vue'
export default {
  // data() {
  //   // return {
  //   //   // 商品信息
  //   //   shopList: [],
  //   // }
  // },
  methods: {
    //获取主页商品信息
    // async getShopList() {
    //   const { data: data } = await this.$axios.get('/api/api/getindexgoods')
    //   this.shopList = data.list[0].content
    // }
    ...mapActions({
      'requestShopList':'home/requestShopList'
    })
  },
 mounted() {
    this.requestShopList()
  },
  computed:{
    ...mapGetters({
     'shopList':'home/shopList'
    })
  }
}
</script>

<style scoped>
.con {
  margin-bottom: 1.04rem;
}
/* 头部 */
.header {
  overflow: hidden;
  display: flex;
  padding-top: 0.3rem;
  margin-bottom: 0.3rem;
}
/* logo */
.header .logo {
  margin-left: 0.2rem;
  width: 2rem;
  height: 0.5rem;
}
/* 头部搜索框 */
.search-wrap {
  flex: 1;
}
.header .search {
  width: 1.8rem;
  height: 0.5rem;
  background: #ccc;
  color: #666;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.14rem;
  margin: 0 auto;
  border-radius: 0.2rem;
}
/* 轮播图 */
.banner {
  height: 4rem;
  position: relative;
}
/* 限时抢购 */
.min-box {
  display: flex;
}
.min-box .eve {
  flex: 1;
  text-align: center;
  color: #666;
}
.min-box .eve img {
  width: 90%;
}
/* 商品部分 */
.item {
  display: flex;
  padding: 0.2rem;
}
.list .item-img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.list .item-con {
  flex: 1;
  margin-left: 0.3rem;
}
.item-con .goodsname {
  font-size: 0.38rem;
  color: #333;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.price {
  color: #e23838;
  font-size: 0.4rem;
}
.btn {
  padding: 0.2rem 0.4rem;
  background: #f90;
  color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
}

.banner {
  height: 4rem;
  position: relative;
}
</style>