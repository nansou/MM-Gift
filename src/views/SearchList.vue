<template>
  <div class="list">
    <div class='headerContainer'>
        <div class='header'>
            <router-link to="/"><img src='../assets/logo.png' class='logo' /></router-link>
            <div class='inputContainer'>
                <input class='searchInput' v-model="keyWords" type="text" placeholder="请输入关键词">
                <div @click="searchPro" class='searchBtn'>搜索</div>
            </div>
        </div>
    </div>
    <div class='type'>
        <p>促销活动:</p>
        <span>秒杀</span>
        <span>优选</span>
        <span>天猫</span>
        <span>运费险</span>
        <span>运费险</span>
    </div>
    <div class="middleContainer">
        <ul class="sort">
                <li class="active"><span>人气</span></li>
                <li><span>最新</span></li>
                <li><span>销量</span></li>
                <li><span>价格</span></li>
                <li><div><span class="txtContainer"><input type='text' v-model="minCost" placeholder="￥" /></span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;<span class="txtContainer"><input type='text' v-model="maxCost" placeholder="￥" /></span></div></li>
        </ul>
    </div>
    <ul class='content'>
        <li @click="toDetail('527255017859')">
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
            <li @click="toDetail('527255017859')">
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
            <li @click="toDetail('527255017859')">
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
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import SliderCard from "@/components/SliderCard.vue";
import {getTopTen} from '@/axios/modules/search'

export default {
  name: "home",
  data() {
    return {
     keyWords: '',
     minCost: '',
     maxCost: ''
    }
  },
  components: {
    Carousel,
    SliderCard
  },
  methods: {
    searchPro: function() {
        console.log('click')
    },
  },
  
  created() {
    console.log('getTopTen')
    // getTopTen(this.keyWords).then((res)=>{
    //   console.log(res)
    // })
  },
};
</script>

<style scoped lang='less'>
.list {
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
  .type {
        width: 1200px;
        margin: 0 auto;
        text-align: left;
        border-bottom: 1px solid #D60155;
        padding: 10px;
        margin-top: 20px;
        >p {
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
        }
      >span {
        display: inline-block;
        width: 58px;
        height: 30px;
        border: 1px solid #D60155;
        color: #D60155;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        font-weight: bold;
        margin-left: 10px;
        border-radius: 5px;
        background-color: #fff;
      }
      >span:hover {
          color: #fff;
          background-color: #D60155;
          cursor: pointer;
      }
  }
  .middleContainer {
      width: 1200px;
      margin: 0 auto;
      text-align: left;
  }
  .sort {
      display: inline-block;
      border-top: 1px solid #AAAAAA;
      border-left: 1px solid #AAAAAA;
      border-right: 1px solid #AAAAAA;
      text-align: left;
      margin-top: 20px;
      >li {
          display: inline-block;
          text-align: center;
          cursor: pointer;
          font-weight: bold;
          background-color: #FCFCFC;
          >span {
            padding: 10px 20px;
            border-right: 1px solid #AAAAAA;
            text-align: center; 
            display: inline-block;
          }
          > div {
              margin: 0 10px;
          }
      }
      >li:last-child {
          cursor: none;
      }
      >li.active {
            background-color: #FFEFDB;
            color: #008B8B;
      }
      >div {
          display: inline-block;
      }
  }
  .txtContainer {
    width: 40px;
    border: 1px solid #aaa;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    > input {
        width: 59px;
        height: 20px;
        padding-left: 5px;
        font-size: 12px;
    }
  }
  .confirm {
    display: inline-block;
    padding: 4px 10px;
    color: #D60155;
    border: 1px solid #D60155;
    margin-left: 20px;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
  }
  .clear {
      display: inline-block;
      padding: 4px 10px;  
      margin-left: 10px;
      color: #aaaaaa;
      border: 1px solid #aaa;
      border-radius: 4px;
      cursor: pointer;
      position: absolute;
      margin-left: 70px;
  }
  .content {
      width: 1200px;
      margin: 0 auto;
      border-bottom: 1px solid #AAAAAA;
      border-left: 1px solid #AAAAAA;
      border-right: 1px solid #AAAAAA;
      background-color: #FFEFDB;
      >li {
              display: inline-block;
              margin: 18px;
          }
  }
}
</style>
