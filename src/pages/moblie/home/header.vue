<template>
  <div id="home_header">
      <div class="home-header">
        <v-swipe class="my-swipe" :showIndicators="false" ref="swipe">
          <a class="next-btn" v-on:click="getnext"></a>
          <a class="swipe-message">
            <div>-</div>
            <div>2017新生报到率（%）</div>
            <div class="swipe-message-bdl">{{headerData.bdl}}</div>
          </a>
          <v-swipeItem class="slide"><img v-bind:src="headerData.function_face"></v-swipeItem>
        </v-swipe>
        <div class="home-header-message">
          <div class="f-left">
            <img src="../../../assets/yxtj-message1.png">
            <a>报到总人数:{{headerData.sdrs}}/{{headerData.ydrs}}</a>
          </div>
          <div class="f-right">
            <img class="active-img" v-bind:src="img_url" v-on:click="change_img">
          </div>
          <div style="clear:both;"></div>
        </div>
    </div>
 </div>
</template>
 <script>
import { Swipe, SwipeItem } from 'vue-swipe'
let imgUrl_top = require('../../../assets/yxtj-top.png')
let imgUrl_bottom = require('../../../assets/yxtj-bottom.png')
 export default {
  name: 'home_header',
  data:function(){
    return {
      img_url:imgUrl_bottom,
      data:"",
      lunbo:''
    }
  },
  props:['headerData'],
  created(){
    console.log(this.headerData)
  },
  components:{
    'v-swipe':Swipe,    
    'v-swipeItem':SwipeItem
  },
  methods:{
    'getnext':function(){
      // this.$refs.swipe.next();
      this.$router.push('/containt/region');
    },
    'change_img':function(){
      this.img_url = this.img_url==imgUrl_bottom?imgUrl_top:imgUrl_bottom;
    }
  }
}
</script>
<style>
#home_header{
  font-size: 0.28em;
}
.my-swipe{
  height:10em!important;
}
.my-swipe{
  position: relative;
}
.f-left{
  float:left;
}
.f-right{
  float:right;
}
.next-btn{
  display: block;
  position:absolute;
  background-image:url("../../../assets/yxtj-right.png");
  background-color:rgba(255,255,255,0);
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  width: 1em;
  height:2em;
  top: 50%;
  right:1em;
  margin-top:-1em;
  transform: translate(-50%, 0);
  z-index: 999;
}
.swipe-message{
  position: absolute;
  display: block!important;
  color: white;
  left:.5em;
  top:50%;
  transform: translate(0,-50%);
  text-align: left;
  z-index: 999;
}
.swipe-message-bdl{
  font-family: 'STHEITI';
  font-size: 2.5625EM;
}
.home-header-message{
  padding:.8em 1em;
}
.home-header-message div{
  line-height:1em;
}
.home-header-message div a,.home-header-message div img{
  display:inline-block;
  vertical-align:middle;
}
.home-header-message div img{
  height:1em;
  width:1em;
}
.active-img{
  height:.6em!important;
}
.slide1{
  background:red;
}
.slide2{
  background: yellowgreen;
}
.slide3{
  background: purple;
}
.slide img{
  width: 100%;
  height: 100%;
}
</style>
