<template>
  <div class="con">
    <div class="header">购物车</div>
    <div class="con">
      <!-- 动态渲染 -->
      <div class="every" v-for="item in shopList" :key="item.id">
        <div class="title">
          <img src="/static/img/store.png" alt class="title-img" />
          <div class="title-txt">杭州保税区仓</div>
        </div>
        <div :class="[...classArr]">
          <div class="inner">
            <div class="left" @click="changeOne(item)">
              <img :src="item.checkedimg" class="left-img" />
            </div>
            <div class="center">
              <img :src="'http://localhost:3000/'+item.img" class="center-img" />
            </div>
            <div class="right">
              <div class="r-left">
                <div class="name">{{item.goodsname}}</div>
                <div class="btns">
                  <div class="btn" @click="sub(item)">-</div>
                  <div class="btn">{{item.num}}</div>
                  <div class="btn" @click="add(item)">+</div>
                </div>
                <div style="margin-top: 0.1rem;">总价：{{item.price*item.num | filterPrice}}</div>
              </div>
            </div>
            <div class="price">
              <div>￥{{item.price | filterPrice}}</div>
            </div>
            <div class="delete-btn" @click="delShop(item.id)">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="quanxuan" @click="changeAll">
        <img :src="checkedAllimg" class="quanxuan-img" />
        <div class="quanxuan-txt">全选</div>
      </div>
      <div class="edit" @click="edit">
        <img
          :src="editOnoff?'/static/img/editor_hig.png':'/static/img/editor_nor.png'"
          class="edit-img"
        />
        <div class="edit-txt">编辑</div>
      </div>
      <div class="all">
        <div class="all-price">合计:{{allPrice}}</div>
        <div class="all-price tip">(不含运费)</div>
      </div>
      <div class="pay-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      //全选开关
      checkedAll: false,
      //全选图
      checkedAllimg: '/static/img/radio_nor.png',
      // 编辑开关
      editOnoff: false,
      classArr: ['every-con'],
    }
  },
  methods: {
    ...mapActions({
      requestShoplist: 'shop/requestShoplist',
      reqEditshop: 'shop/reqEditshop',
      reqDelshop: 'shop/reqDelshop',
    }),
    //获得商品列表信息
    async getShop() {
      let uid = localStorage.getItem('uid')
      await this.requestShoplist(uid)
      console.log(this.shopList)
      //为每个商品添加checked属性
      if (this.shopList) this.shopList.map((item) => (item.checked = false))
      //为每个商品添加checkedimg属性
      if (this.shopList)
        this.shopList.map(
          (item) => (item.checkedimg = '/static/img/radio_nor.png')
        )
      //!!!!页面不渲染问题
      if (this.shopList) {
        let obj = this.shopList[0]
        this.$set(this.shopList, 0, obj)
      }
    },
    //修改某一项的checked
    changeOne(item) {
      item.checked = !item.checked
      item.checked
        ? (item.checkedimg = '/static/img/radio_hig.png')
        : (item.checkedimg = '/static/img/radio_nor.png')
      //!!!!页面不渲染问题
      let obj = this.shopList[0]
      this.$set(this.shopList, 0, obj)
      //查看所有的checked是否都是true,如果都是true,checkedAll=true;只要有一个不是true,checkedAll=false;
      this.checkedAll = this.shopList.every((item) => item.checked)
      this.checkedAll
        ? (this.checkedAllimg = '/static/img/radio_hig.png')
        : (this.checkedAllimg = '/static/img/radio_nor.png')
    },
    //减少
    sub(item) {
      item.num--
      if (item.num < 1) {
        alert('宝贝不能再少了')
        item.num = Math.max(item.num, 1)
      } else {
        this.editShop(item.id, 1)
      }
    },
    //增加
    add(item) {
      item.num++
      this.editShop(item.id, 2)
    },
    //修改了全选
    changeAll() {
      this.checkedAll = !this.checkedAll
      this.shopList.forEach((item) => {
        item.checked = this.checkedAll
      })
      this.shopList.forEach((item) => {
        item.checked
          ? (item.checkedimg = '/static/img/radio_hig.png')
          : (item.checkedimg = '/static/img/radio_nor.png')
      })
      this.checkedAll
        ? (this.checkedAllimg = '/static/img/radio_hig.png')
        : (this.checkedAllimg = '/static/img/radio_nor.png')
      //!!!!页面不渲染问题
      let obj = this.shopList[0]
      this.$set(this.shopList, 0, obj)
    },
    // 编辑
    edit() {
      this.editOnoff = !this.editOnoff
      this.editOnoff ? this.classArr.push('mystyle') : this.classArr.pop()
    },
    // 购物车删除
    async delShop(id) {
      await this.reqDelshop(id)
      alert('删除成功')
      //更新数据
      this.getShop()
    },
    // 购物车修改
    async editShop(id, type) {
      let info = { id, type }
      await this.reqEditshop(info)
      //更新数据
      this.getShop()
    },
  },
  created() {
    this.getShop()
  },

  computed: {
    allPrice() {
      if (this.shopList) {
        return this.shopList.reduce(
          (val, item) => (item.checked ? (val += item.price * item.num) : val),
          0
        )
      } else {
        return 0
      }
    },
    ...mapGetters({
      shopList: 'shop/shopList',
    }),
  },
}
</script>

<style scoped>
.mystyle {
  margin-left: -1.48rem;
}
.con {
  margin-bottom: 2.24rem;
}
.header {
  font-size: 0.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #fff;
  text-align: center;
  background: #f90;
}
.title {
  overflow: hidden;
  height: 1.06rem;
}
.title-img {
  float: left;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.36rem;
  margin-top: 0.35rem;
  margin-right: 0.27rem;
}
.title-txt {
  float: left;
  font-size: 0.28rem;
  color: #a8a8a8;
  line-height: 1.06rem;
}
.every-con {
  overflow: hidden;
}
.inner {
  width: 8.7rem;
  height: 2.4rem;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.left {
  float: left;
}
.left-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-left: 0.38rem;
  margin-top: 0.86rem;
  margin-right: 0.21rem;
}
.center {
  float: left;
}
.center-img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.3rem;
  margin-right: 0.21rem;
}
.right {
  float: left;
}
.r-left {
  float: left;
  width: 2.8rem;
  margin-top: 0.1rem;
  margin-right: 0.13rem;
}
.name {
  font-size: 0.32rem;
  overflow: hidden;
  color: #333;
  margin-bottom: 0.33rem;
}
.btns {
  overflow: hidden;
}
.btn {
  width: 0.78rem;
  height: 0.47rem;
  float: left;
  font-size: 0.24rem;
  color: #666;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.47rem;
}
.price {
  float: left;
  font-size: 0.3rem;
  color: #333;
  line-height: 1.2rem;
}
.footer {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  left: 0;
  bottom: 1.04rem;
  border-top: 0.02rem solid #ccc;
  overflow: hidden;
  background: #fff;
}
.quanxuan {
  float: left;
  width: 0.58rem;
  margin-left: 0.38rem;
  margin-top: 0.18rem;
  margin-right: 0.68rem;
}
.edit-img,
.quanxuan-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.edit {
  float: left;
  width: 0.58rem;
  margin-top: 0.18rem;
}
.edit-txt,
.quanxuan-txt {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.all {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.29rem;
}
.all-price {
  font-size: 0.24rem;
  color: #666;
}
.tip {
  color: #999;
  margin-left: 0.08rem;
}
.pay-btn {
  width: 2.32rem;
  float: right;
  height: 1.12rem;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.38rem;
}
.delete-btn {
  float: right;
  height: 2.4rem;
  width: 0.98rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background: #fa0;
}
</style>