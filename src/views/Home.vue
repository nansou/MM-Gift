<template>
  <div class="home">
    <img src='../assets/logo.png' class='logo' />
    <div class='inputContainer'>
      <input class='searchInput' v-model="keyWords" type="text" placeholder="你想要的都在这儿！！！">
      <div @click="searchPro" class='searchBtn'>搜索</div>
    </div>
    <Carousel :sourceData='checkoutTopTen' />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters } from 'vuex'
import Carousel from "@/components/Carousel.vue";
import SliderCard from "@/components/SliderCard.vue";
import {getTopTen} from '@/axios/modules/search'

export default {
  name: "home",
  data() {
    return {
     keyWords: ''
    }
  },
  components: {
    Carousel,
    SliderCard
  },
  computed: {
     ...mapGetters({
      checkoutTopTen: 'topTen',
    }),
  },
  methods: {
    ...mapMutations([
      'KEY_WORDS', 
    ]),
    searchPro: function(){
      this.$store.commit('KEY_WORDS',this.keyWords)
      this.$router.push('/searchList')
    },
  },
  created() {
    if(this.checkoutTopTen.length === 0) {
      getTopTen(this.keyWords).then((res)=>{
        this.$store.commit('TOP_TEN',res.data.result)
      })
    }
  },
};
</script>

<style>
  .home {
    width: 1200px;
    margin: 0 auto;
    padding-top: 5%;
  }
  .searchInput {
    margin-left: -70px;
    height: 44px;
    font-size: 14px;
  }
  .logo{
    display: block;
    width: 272px;
    height: auto;
    margin: auto;
  }
  .inputContainer {
    background-color: #D4D4D4;
    width: 30%;
    margin: 0 auto;
    border-radius: 20px;
  }
  .swiper-pagination-bullet-active {
    background: #D60155;
  }
  .inputContainer:hover {
    background-color: #C7C7C7;
  }
  .searchBtn{
    display: inline-block;
    float: right;
    line-height: 44px;
    width: 70px;
    background-color: #D60155;
    color: #fff;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
  }
</style>
