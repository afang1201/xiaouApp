<template>
  <div class="con">
    <div class="header">分类</div>
    <div class="main">
      <div class="left">
        <div
          class="nav"
          v-for="(item,i) in fenleiList"
          :key="i"
          :class="[i==index?'nav-select':'']"
          @click="getFenleiShop(i)"
        >{{item.catename}}</div>
      </div>
      <div class="right">
        <div class="every" v-for="item in fenleiShop" :key="item.id" @click="list(item.id)">
          <img :src="'/static/img'+item.img" class="img" />
          <div class="text">{{item.catename}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      // // 列表数据
      // fenleiList: [],
      // 商品数据
      fenleiShop: [],
      index:1
    }
  },
  methods: {
    //获取列表数据
    // async getFenleiList() {
    //   const { data: data } = await this.$axios.get('/api/api/getcatetree')
    //   console.log(data);
    //   if (data.code !== 200) return alert('获取列表失败')
    //   this.fenleiList = data.list
    //   this.getFenleiShop(0)
    // },
    ...mapActions({
      'requestFenleiList':'fenlei/requestFenleiList'
    }),
    // 获取分类对应商品
    getFenleiShop(i) {
      this.index=i
      this.fenleiShop=this.fenleiList[i].children
    },
    //跳转分类商品列表
    list(fid){
      this.$router.push('/list?id='+fid)
    }
  },
  computed:{
    ...mapGetters({
      'fenleiList':'fenlei/fenleiList'
    })
  },
  async created() {
    await this.requestFenleiList()
    this.getFenleiShop(0)
  },
}
</script>

<style scoped>
/* 头部 */
.header {
  font-size: 0.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #fff;
  text-align: center;
  background: #f90;
}
/* 主体 */
.main {
  display: flex;
}
/* 左侧列表 */
.left {
  width: 2.34rem;
  background: #fafafa;
}
.nav {
  font-size: 0.28rem;
  height: 0.93rem;
  text-align: center;
  line-height: 0.93rem;
  border-left: 0.1rem solid #fafafa;
}
/* 选中样式 */
.nav-select {
  border-left: 0.1rem solid #1d84a7;
  background: #fff;
  color: #f90;
}
/* 右侧商品 */
.right {
  flex: 1;
  overflow: hidden;
}
.every {
  float: left;
  border: 0.02rem solid #1d84a7;
  border-radius: 0.2rem;
  margin-left: 0.1rem;
  margin-top: 0.24rem;
  position: relative;
  overflow: hidden;
}
.every,
.img {
  width: 2.2rem;
  height: 2.3rem;
}
.text {
  height: 0.48rem;
  width: 2.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #1d84a7;
  color: #fff;
  text-align: center;
  line-height: 0.48rem;
  font-size: 0.23rem;
}
</style>