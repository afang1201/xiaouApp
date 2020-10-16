<template>
  <div class="carousel banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of banners" :key="index">
          <img :src="'/static/img/'+item.img" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-navigation"></div> -->
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
Swiper.use([Autoplay, Navigation, Pagination])
export default {
  data() {
    return {
      banners: [],
    }
  },
  methods: {
    carouselScroll() {
      this.mySwiper = new Swiper('.swiper-container', {
        loopAdditionalSlides: 3,
        loop: true,
        speed: 2000,
        autoplay: {
          // 自动滑动
          delay: 1000, //1秒切换一次
          disableOnInteraction: false,
        },
        pagination: {
          // 如果需要分页器
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true, // 启动动态检查器(OB/观众/观看者)
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      })
    },
    async getBanner() {
      const { data: data } = await this.$axios.get('/api/api/getbanner')
      this.banners = data.list
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.carouselScroll()
    })
  },
  created() {
     this.getBanner()
  },
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 4rem;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
</style>