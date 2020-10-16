<template>
  <div  class="page">
    <div class="header">
      <!-- <span class="back" is='router-link' to='/index/fenlei'>返回</span> -->
      <go-back></go-back>
      <span>电视</span>
    </div>
    <div class="list">
      <a  class="item" v-for="item in shopList" :key='item.id' @click="detail(item.id)">
        <img :src="'http://localhost:3000/'+item.img"  class="item-img" />
        <div class="item-con">
          <div class="goodsname">{{item.goodsname}}</div>
          <div class="price">￥{{item.market_price}}</div>
          <div class="btn">立即抢购</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  // data(){
  //   return{
  //     shopList:[]
  //   }
  // },
  methods:{
    ...mapActions({
      'requestShopList':'requestShopList'
    }),
    // async getList(){
    //   const {data:data}=await this.$axios.get('/api/api/getgoods',{params:{fid:this.$route.query.id}})
    //   this.shopList=data.list
    //   console.log(this.shopList);
    // },
    //跳转详情页
    detail(id){
      this.$router.push('detail?id='+id)
    }
  },
  created(){
   this.requestShopList(this.$route.query.id)
  },
  computed:{
    ...mapGetters({
     'shopList':'shopList'
    })
  }
}
</script>

<style scoped>
.page{
    padding-top: .8rem;
}
.header{
    width: 100%;
    height: .8rem;
    background: #f90;
    text-align: center;
    line-height: .8rem;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
}
.header, .header span {
    font-size: .38rem;
    color: #fff;
}
.back {
     color: #fff;
      font-size: .38rem;
    position: absolute;
    left: .3rem;
}
.header, .header span {
    font-size: .38rem;
    color: #fff;
}
.item {
    display: flex;
    padding: .2rem;
}
.list .item-img {
    width: 2rem;
    height: 2rem;
    border-radius: .2rem;
}
.list .item-con {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: .3rem;
}
.item-con .goodsname{
    font-size: .38rem;
    color: #333;
    line-height: .6rem;
    margin-bottom: .2rem;
}
.price{
    color: #e23838;
    font-size: .4rem;
}
.btn{
    padding: .2rem .4rem;
    background: #f90;
    color: #fff;
    display: inline-block;
    border-radius: .2rem;
}
</style>