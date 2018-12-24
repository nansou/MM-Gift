<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class='slider-table' :key='n' v-for='n in 10'>
          <ul>
            <li @click="toDetail(item.ID)" :key='item.id' v-for='(item, index) in sourceData' v-if='index>(n-1)*4-1 && index<=4*n-1' >
              <SliderCard :imgSrc='item.Pic'
              :originPrice='item.Org_Price'
              :alreadyGet='item.Quan_receive'
              :discountsPrice='item.Price'
              :discounts='item.Quan_price'
              :title='item.D_title'
           />
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
         <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script>
import SliderCard from "@/components/SliderCard.vue";
  export default {
    props: {
      sourceData: {
          type: Array,
          default: ()=>{}
      },
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          //autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    },
    created(){
      //console.log(12345,this.sourceData)
    },
    components: {
        SliderCard
    },
    methods: {
      toDetail: function(id) {
        this.$router.push(`/detail/${id}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less' >
@import url(../style/swiper.css);
.swiper-container{
  height:400px;
  overflow: hidden;
  margin-top:60px;/*px*/
}
.swiper-wrapper{
  height:400px;
}
.swiper-slide{
  height:400px;
  float: left;
  background:#fff;
}
.slider-table{
  > ul {
    > li {
        display: inline-block;
        margin: 20px 10px;
    }
  }
}
.swiper-button-prev{
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23ff2220'%2F%3E%3C%2Fsvg%3E");
    width: 3%;
    height: 6%;
}
  .swiper-button-next {
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23ff2220'%2F%3E%3C%2Fsvg%3E");
    width: 3%;
    height: 6%;
  }


</style>