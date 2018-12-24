<template>
 <div class="card-container">
     <img :src='imgSrc' />
     <div class='title'><span>包邮</span><span :title='title'>{{getTitle}}</span></div>
     <div class='origin'><span>现价：￥{{originPrice}}</span><span>已领{{alreadyGet}}张券</span></div>
     <div class='discounts'><div><span>￥<i>{{getInteger}}</i>{{getDecimal}}</span><img src='../assets/qhj.png' /></div><span>券 {{discounts}} 元</span></div>
 </div>
</template>

<script>
import te from '../assets/qhj.png'
  export default {
    props: {
      imgSrc: {
        type: String,
        default: "../assets/logo.png"
      },
      title: {
        type: String,
        default: "快鱼搜券，你想要的都在这里"
      },
      originPrice: {
        type: String,
        default: false
      },
      alreadyGet: {
        type: String,
        default: false
      },
      discountsPrice: {
      },
      discounts: {
        type: String,
        default: false
      }
      
    },
    data() {
      return {
        swiperOption: {
          pagination: {
          el: '.swiper-pagination',
          clickable: true
          }
        }
      }
    },
    computed: {
      getInteger: function () {
        let tempNumber = (this.discountsPrice+'').indexOf('.') > -1 ? (this.discountsPrice + '') : this.discountsPrice + '.0';
        return tempNumber.substr(0,tempNumber.indexOf('.'))
      },
      getDecimal: function () {
        let tempNumber = (this.discountsPrice+'').indexOf('.') > -1 ? (this.discountsPrice + '') : this.discountsPrice + '.0';
        return tempNumber.substr(tempNumber.indexOf('.'))
      },
      getTitle: function(){
        return this.title.length > 16 ? (this.title.substr(0,16) + '...') : this.title;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less' >
@import url(../style/swiper.css);
.card-container{
    display: inline-block;
    width: 260px;
    font-size: 12px;
    background-color: #fff;
    border: 1px solid #fff;
    > img{
        width: 257px;
        height: auto;
    }
    .title {
        padding: 10px 0;
        text-align: left;
        > span:first-child {
            background-color: #D60155;
            color: #fff;
            padding: 2px;
            margin: 5px;
            font-size: 12px;
        }
    }
    .origin {
      display: flex;
      color: #999;
      justify-content: space-between;
      padding: 0 17px 0 6px;
    }
    .discounts {
      display: flex;
      color: #D60155;
      justify-content: space-between;
      padding: 0 6px;
      > div {
        display: inline-block;
        > span {
          font-size: 14px;
          > i {
            font-weight: bold;
            font-size: 26px;
            font-style: normal;
            padding-left: 2px;
            line-height: 40px;
          }
        }
        > img {
          height: 17px;
          margin-top: 14px;
        }
      }
      > span {
        display: block;
        float: right;
        margin: 6px 10px 0 0;
        font-size: 14px;
        text-align: center;
        background: #fff7fa;
        color: #D60155;
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
        border: dotted 1px #D60155;
        min-width: 60px;
      }
    }
}
.card-container:hover{
  border: 1px solid #D60155;
}
.swiper-wrapper{
  height:200px;
}
.swiper-slide{
  height:200px;
  float: left;
  background:#dedede;
}


</style>