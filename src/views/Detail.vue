<template>
  <div class="detail">
    <div class='headerContainer'>
        <div class='header'>
            <router-link to="/"><img src='../assets/logo.png' class='logo' /></router-link>
            
            <div class='inputContainer'>
                <input class='searchInput' v-model="keyWords" type="text" placeholder="请输入关键词">
                <div @click="searchPro" class='searchBtn'>搜索</div>
            </div>
        </div>
    </div>
    <div class='content'>
        <img :src='detail.Pic' />
        <div>
            <p class='title'>{{detail.D_title}}</p>
            <p class='introduce'>{{detail.Introduce}}</p>
            <p class='price'>券后价<i>￥</i><i>{{detail.Price}}</i><i>元</i> <span>原价{{detail.Org_Price}}</span></p>
            <p class='discount'>优惠券数量：{{detail.Quan_surplus}}  |  已售：{{detail.Quan_receive}}</p>
            <div @click='convertUrl'><p class='buy'><img src='../assets/yhq.png' /><span class='count'><i>￥</i>{{detail.Quan_price}}<i>元</i></span></p><span class="handle">领券购买</span></div>
        </div>
    </div>
    <div class='split'>
        <div>
            <span>大</span>
            <span>家</span>
            <span>都</span>
            <span>在</span>
            <span>看</span>
        </div>
    </div>
    <div class="more">
        <ul class='slider-table'>
            <li @click="toDetail('id')">
              <SliderCard imgSrc='https://img.alicdn.com/imgextra/i2/2302562708/O1CN011VsJ0rY61zP2YHX_!!2302562708.jpg'
              originPrice='199.91'
              alreadyGet='299'
              discountsPrice='188.88'
              discounts='11.11'
           />
            </li>
            <li>
              <SliderCard imgSrc='https://img.alicdn.com/imgextra/i2/2302562708/O1CN011VsJ0rY61zP2YHX_!!2302562708.jpg'
              originPrice='199.92'
              alreadyGet='299'
              discountsPrice='188.88'
              discounts='11.11'
           />
            </li>
            <li>
              <SliderCard imgSrc='https://img.alicdn.com/imgextra/i2/2302562708/O1CN011VsJ0rY61zP2YHX_!!2302562708.jpg'
              originPrice='199.93'
              alreadyGet='299'
              discountsPrice='188.88'
              discounts='11.11'
           />
            </li>
            <li>
              <SliderCard imgSrc='https://img.alicdn.com/imgextra/i2/2302562708/O1CN011VsJ0rY61zP2YHX_!!2302562708.jpg'
              originPrice='199.93'
              alreadyGet='299'
              discountsPrice='188.88'
              discounts='11.11'
           />
            </li>
          </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters } from 'vuex'
import Carousel from "@/components/Carousel.vue";
import SliderCard from "@/components/SliderCard.vue";
import {getDetail} from '@/axios/modules/search'

export default {
  name: "detail",
  props: ['id'],
  data() {
    return {
     detail: {},
     keyWords: '',
    }
  },
  components: {
    Carousel,
    SliderCard
  },
  computed: {
     ...mapGetters([
      'topTen'
    ]),
  },
  created: {

  },
  methods: {
    searchPro: function() {
        console.log('click')
    },
    convertUrl: function() {
        console.log('convert')
    }
  },
  
  created() {
    console.log('getTopTen')
    getDetail(this.id).then((res)=>{
       this.detail = res.data.result;
      })
  },
};
</script>

<style scoped lang='less'>
  .headerContainer {
      border-bottom: 2px solid #f2f2f2;

  }
  .header {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
  }
  .searchInput {
    margin-left: -70px;
    height: 44px;
    font-size: 14px;
  }
  .logo{
    float: left;
    margin-top: 10px;
    display: inline-block;
    width: 100px;
  }
  .inputContainer {
    display: inline-block;
    background-color: #D4D4D4;
    width: 30%;
    margin: 0 auto;
    border-radius: 5px;
    margin-top: 20px;
  }
  .searchBtn{
    display: inline-block;
    float: right;
    line-height: 44px;
    width: 70px;
    background-color: #D60155;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background: #D60155;
  }
  .inputContainer:hover {
    background-color: #C7C7C7;
  }
  .content {
    background: #FFEFDB;
    width: 1200px;
    margin: 40px auto;
    text-align: left;
    > img {
        display: inline-block;
        height: 226px;
        border-right: 1px solid #f5f5f5;
    }
    > div {
        display: inline-block;
        position: absolute;
        padding: 20px 0 0 20px;
        margin: 0 0 0 20px;
        width: 700px;
        font-size: 14px;
        font-weight: bold;
        >p:first-child {
            font-size: 16px;
            font-weight: bold;
        }
        
        .introduce {
            font-size: 14px;
            line-height: 20px;
            color: #D60155;
            margin: 14px 0;
        }
        .price {
            > i:first-child {
                margin-left: 6px;
                font-size: 12px;
                color: #D60155;
            }
            > i:nth-child(2) {
                font-size: 20px;
                color: #D60155;
            }
            > i:nth-child(3){
                font-size: 12px;
                color: #D60155;
            }
            >span {
                text-decoration: line-through;
                margin-left: 20px;
                color: #bdbdbd;
                font-size: 14px;
                >i {
                    font-size: 12px;
                }
            }
        }
        .discount {
            margin-top: 10px;
            color: #999;
            margin-bottom: 10px;
        }
        .buy {
               display: inline-block;
                margin-top: 15px;
                padding: 0 5px;
                height: 30px;
                border-left: 1px solid #D60155;
                border-bottom: 1px solid #D60155;
                border-top: 1px solid #D60155;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                cursor: pointer;
            > img {
                width: 30px;
            }
            > .count {
                color: #D60155;
                font-size: 16px;
                padding-top: 5px;
                display: inline-block;
                > i{
                    font-size: 12px;
                }
            }
        }
        .handle {
               display: inline-block;
                width: 70px;
                height: 31px;
                text-align: center;
                line-height: 30px;
                border: 1px solid #D60155;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                color: #D60155;
                cursor: pointer;
        }
    }
  }
.split {
    text-align: left;
    width: 1200px;
    margin: 0 auto;
    > div {
        >span{
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        line-height: 30px;
        color: #fff;
        font-size: 14px;
        margin-bottom: 20px;
        text-align: center;
        border-radius: 5px;
        }
        >span:nth-child(1) {
            background-color: #f67243;
        }
        >span:nth-child(2) {
            background-color: #00868B;
        }
        >span:nth-child(3) {
            background-color: #7CCD7C
        }
        >span:nth-child(4) {
            background-color: #7FFFD4
        }
        >span:nth-child(5) {
            background-color: #B3EE3A;
        }
    }
}
.more {
    width: 1200px;
    margin: 0 auto;
    > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background: #FFEFDB;
        .mg-20 {
            margin-top: 40px;
        }
    }
}
</style>
