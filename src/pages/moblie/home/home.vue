<template>
  <div id="home">
    <v-header :headerData="headerData" v-show="header_stus"></v-header>
    <v-containt :containtData="containtData"></v-containt>
    <v-containt1 :containtDatab="containtDatab"></v-containt1>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
import header from './header'
import containt from './containt'
import containt1 from './containt1'
import config from '../../../assets/config.js'
export default {
  data:function(){
    return {
      header_stus:"",
      containtData_stus:"",
      containtDatab_stus:"",
      headerData:"",
      containtData:"",
      containtDatab:""
    }
  },
  name: 'app',
  components:{
    'v-header':header,
    'v-containt':containt,
    'v-containt1':containt1
  },
  created(){
    var _this = this;
    new Promise((resolve,reject) => {
        axios.get(config.url+'ydyx/yxtj/yxtj_xsbdl.action').then((response) => {
          if(response.data.code == 40001){
            _this.headerData = response.data.content[0];
          }
        })
      });
    new Promise((resolve,reject) => {
        axios.get(config.url+'ydyx/yxtj/yxtj_xslbxxtj.action').then((response) => {
          if(response.data.code == 40001){
            _this.containtData = response.data.content;
          }
        })
      });
    _this.containtDatab = new Promise((resolve,reject) => {
        axios.get(config.url+'ydyx/yxtj/yxtj_xsnvbltj.action').then((response) => {
          if(response.data.code == 40001){
            // _this.containtDatab = response.data.content;
             resolve(response.data.content);
          }
        })
      });
    setTimeout(() => {
      this.header_stus = true;
    },0)
    setTimeout(() => {
      this.containtData_stus = true;
    },0)
    setTimeout(() => {
      this.containtDatab_stus = true;
    },0)
  },
  methods:{
  }
}
</script>

<style>
#app {
  /*font-family: Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*公用样式*/
.mt1em{
  margin-top:.8em;
}
.ft-16{
  font-size:18px;
}
.ft-12{
  font-size:12px;
}
.line-h14{
  line-height:1.4em;
}

</style>
