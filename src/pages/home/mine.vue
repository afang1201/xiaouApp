<template>
  <div class="page con">
    <div class="header">
      <img src="/static/img/me/set.png" class="header-left" />
      <div class="header-center">个人中心</div>
      <div class="header-right">
        <img src="/static/img/me/news.png" alt class="header-right-img" />
        <div class="header-right-text">9+</div>
      </div>
    </div>
    <div class="top">
      <img src="/static/img/me/1.jpg" alt class="ava" />
    </div>
    <div class="bottom">
      <div class="name">小不点儿</div>
      <div class="collection">
        <img src="/static/img/me/keep.png" alt class="xin" />
        <div class="collction-text">我的收藏（5）</div>
      </div>
    </div>
    <div class="order">
      <div class="order-top">
        <div class="order-top-left">我的订单</div>
        <div class="order-top-right">查看订单</div>
      </div>
      <div class="order-bottom">
        <div class="status">
          <div class="img-parent">
            <img src="/static/img/me/icon_refund.png" alt class="status-img" />
          </div>
          <div class="status-info">待发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="/static/img/me/icon_refund.png" alt class="status-img" />
            <div class="status-text">3</div>
          </div>
          <div class="status-info">待发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="/static/img/me/icon_refund.png" alt class="status-img" />
            <div class="status-text">3</div>
          </div>
          <div class="status-info">待发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="/static/img/me/icon_refund.png" alt class="status-img" />
            <div class="status-text">3</div>
          </div>
          <div class="status-info">待发货</div>
        </div>
        <div class="status">
          <div class="img-parent">
            <img src="/static/img/me/icon_refund.png" alt class="status-img" />
            <div class="status-text">3</div>
          </div>
          <div class="status-info">待发货</div>
        </div>
      </div>
    </div>
    <div class="address">收货地址管理</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.con {
  margin-bottom: 1.04rem;
}
.header {
  height: 0.8rem;
  background: #f90;
  overflow: hidden;
  position: relative;
}
.header-left {
  float: left;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.3rem;
  margin-top: 0.15rem;
}
.header-center {
  width: 100%;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  color: #fff;
  font-size: 0.42rem;
  position: absolute;
  left: 0;
  right: 0;
}
.header-right {
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.48rem;
  margin-top: 0.15rem;
  position: relative;
}
.top {
  height: 2.4rem;
  background: #f90;
  position: relative;
}
.ava {
  width: 1.8rem;
  height: 1.8rem;
  border: 0.14rem solid #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -0.9rem;
  bottom: -0.9rem;
}
.bottom {
  height: 2.62rem;
  background-color: #fff;
}
.name {
  padding-top: 0.96rem;
  text-align: center;
  font-size: 0.32rem;
  color: #333;
}
.collection {
  margin-top: 0.5rem;
  overflow: hidden;
}
.xin {
  width: 0.38rem;
  height: 0.38rem;
  margin-left: 0.33rem;
  float: left;
  margin-right: 0.25rem;
}
.collction-text {
  font-size: 0.34rem;
  line-height: 0.38rem;
  float: left;
}
.order {
  margin-top: 0.14rem;
}
.order-top {
  height: 1.24rem;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #333;
}
.order-top-left {
  float: left;
  font-size: 0.34rem;
  line-height: 1.24rem;
  color: #333;
  margin-left: 45px;
}
.order-top-right {
  float: right;
  color: #b6b6b6;
  line-height: 1.24rem;
  font-size: 0.34rem;
}
.order-bottom {
  height: 1.88rem;
  background: #fff;
  overflow: hidden;
}
.status {
  width: 20%;
  float: left;
  height: 1.88rem;
}
.img-parent {
  width: 0.54rem;
  height: 0.48rem;
  margin: 0.46rem auto 0;
  position: relative;
}
.status-img {
  width: 0.54rem;
  height: 0.48rem;
  position: absolute;
  left: 0;
  top: 0;
}
.status-info {
  margin-top: 0.23rem;
  font-size: 0.24rem;
  color: #666;
  text-align: center;
}
.status-text {
  font-size: 0.18rem;
  width: 0.38rem;
  height: 0.38rem;
  background: red;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  right: -0.19rem;
  top: -0.19rem;
  text-align: center;
  line-height: 0.38rem;
}
.address {
  background: #fff;
  font-size: 0.34rem;
  height: 1.3rem;
  line-height: 1.3rem;
  padding-left: 0.43rem;
  margin-top: 0.14rem;
  color: #666;
}
.header-right-text{
    position: absolute;
    width: .34rem;
    height: .34rem;
    font-size: .18rem;
    color: #fff;
    background: red;
    text-align: center;
    line-height: .34rem;
    border-radius: 50%;
    right: -.17rem;
    top: -.17rem;
}
.header-right-img{
    width: .5rem;
    height: .5rem;
    float: left;
}
</style>