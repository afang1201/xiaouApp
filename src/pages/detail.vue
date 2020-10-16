<template>
  <div>
    <div class="header">
      <!-- <span class="back" is="router-link" to="/index/list">返回</span> -->
      <go-back></go-back>
      <span>{{shopInfo.goodsname}}</span>
    </div>
    <img :src="'/static/img'+shopInfo.img" class="bigimg" />
    <div class="info">
      <div class="line1">
        <div class="name">{{shopInfo.goodsname}}</div>
        <div class="line1-right">
          <div class="iconfont icon-gouwuchezhengpin"></div>
          <div class="collect">收藏</div>
        </div>
      </div>
      <div class="line2">
        <div class="left">
          <div class="new-price">￥{{shopInfo.market_price | filterPrice}}</div>
          <div class="old-price">￥{{shopInfo.price | filterPrice}}</div>
        </div>
        <div class="right">
          <div class="right-line2">
            <div class="btn2" v-if="shopInfo.ishot==1">热卖</div>
            <div class="btn2" v-if="shopInfo.isnew==1">新品</div>
          </div>
        </div>
      </div>
    </div>
    <div v-html="shopInfo.description"></div>
    <div class="footer">
      <div class="btn" @click="onOff=true">加入购物车</div>
    </div>
    <!-- 弹出框 -->
    <div class="picker" v-if='onOff'>
      <div class="info">
        <img :src="'/static/img'+shopInfo.img" alt />
        <span>{{shopInfo.goodsname}}</span>
      </div>
      <div class="sku">
        <h3>{{shopInfo.specsname}}</h3>
        <div class="attr">
          <span
            :class="[i==index?'select':'']"
            v-for="(item,i) in specsattr"
            :key="i"
            @click="index=i"
          >{{item}}</span>
        </div>
      </div>
      <div class="btn" @click="subOrder">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { mapActions , mapGetters} from 'vuex'
export default {
  data() {
    return {
      // shopInfo: '',
      specsattr: [],
      index: 0,
      // 弹出框开关
      onOff:false
    }
  },
  methods: {
    ...mapActions({
      'requestShopInfo':'detail/requestShopInfo',
       'requestCartadd':'detail/requestCartadd'
    }),
    // async getInfo() {
    //   const { data: data } = await this.$axios.get('/api/api/getgoodsinfo', {
    //     params: { id: this.$route.query.id },
    //   })
    //   console.log(data)
    //   this.shopInfo = data.list[0]
    //   //将参数信息转为数组方便渲染
    //   this.specsattr = JSON.parse(this.shopInfo.specsattr)
    // },
    // //添加购物车
    // async subOrder(){
    //   let goodsid =this.$route.query.id
    //   let uid=localStorage.getItem('uid')
    //   const {data:data}=await this.$axios.post('/api/api/cartadd',{uid,goodsid,num:1})
    //   alert('加入成功')
    //   this.$router.push('/index/shop')
    //   console.log(data)
    // }
    async subOrder(){
      let goodsid =this.$route.query.id
      let uid=localStorage.getItem('uid')
      let info={ goodsid,uid,num:1}
      await this.requestCartadd(info)
    
      this.$router.push('/index/shop')
    }

  },
  computed:{
    ...mapGetters({
      'shopInfo':'detail/shopInfo'
    })
  },
  async created() {
    await this.requestShopInfo(this.$route.query.id)
    this.specsattr = JSON.parse(this.shopInfo.specsattr)
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.8rem;
  background: #f90;
  text-align: center;
  line-height: 0.8rem;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
.header,
.header span {
  font-size: 0.38rem;
  color: #fff;
}
.back {
  color: #fff;
  font-size: 0.38rem;
  position: absolute;
  left: 0.3rem;
}
.header,
.header span {
  font-size: 0.38rem;
  color: #fff;
}
.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.btn {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
.bigimg {
  width: 100%;
  height: 4rem;
  margin-top: 0.8rem;
}
.info {
  border-top: 2px solid #eee;
  background: #fff;
  margin-bottom: 0.3rem;
}
.line1 {
  width: 6.5rem;
  display: flex;
  margin: 0.1rem auto 0;
}
.name {
  width: 5.5rem;
  padding-right: 0.3rem;
  border-right: 0.01rem solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.4rem;
  color: #333;
}
.line1-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.icon-gouwuchezhengpin {
  font-size: 0.26rem;
  color: red;
  text-align: center;
  line-height: 0.4rem;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.collect {
  font-size: 0.2rem;
  color: red;
  text-align: center;
}
.line2 {
  width: 6.8rem;
  display: flex;
  margin: 0.1rem auto 0;
  padding-bottom: 0.4rem;
}
.left {
  width: 1.5rem;
}
.new-price {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}
.old-price {
  font-size: 0.26rem;
  color: #666;
  text-decoration: line-through;
}
.right {
  flex: 1;
}
.right-line2 {
  overflow: hidden;
}
.btn2 {
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}
.btn2 {
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}
.picker {
  width: 100%;
  padding: 0.3rem;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
}
.picker .info {
  overflow: hidden;
}
.picker .info img {
  width: 2rem;
  height: 2rem;
  float: left;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.picker .info span {
  float: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.sku h3 {
  font-size: 0.38rem;
  line-height: 0.6rem;
  color: #333;
  margin-top: 0.3rem;
}
.attr {
  overflow: hidden;
}
.attr .select {
  color: #f90;
  border-color: #f90;
}
.attr .select {
  color: #f90;
  border-color: #f90;
}
.picker .btn {
  position: static;
  display: block;
  margin: 0 auto;
}
.attr span {
  float: left;
  padding: 0.2rem 0.3rem;
  border: 0.02rem solid #666;
  border-radius: 0.1rem;
  margin: 0.2rem;
  font-size: 0.3rem;
}
</style>