<template>
  <div id="header">
    <div class="contain-left-header">
            <div class="contain-left-header-log">
              <img src='../../../assets/logo.png'>
            </div>
            <div class="contain-left-header-meg">
              <div class="message">
                <div class="message-bdl"><span style="color:#67cca0;">{{data.bdl}}</span></div>
                <div class="message-lx">新生报到率(%)</div>
              </div>
              <div class="message">
                <div class="message-bdl"><span style="color:#67cca0;">{{data.ydrs}}</span></div>
                <div class="message-lx">应到人数</div>
              </div>
              <div class="message">
                <div class="message-bdl"><span style="color:#67cca0;">{{data.sdrs}}</span></div>
                <div class="message-lx">实到人数</div>
              </div>
            </div>
            <div class="clearbt"></div>
            <!-- <div class="contain-left-header-logo">
              <a class="logo"><img v-bind:src="logoPath"></a>
              <div class="contain-left-header-logo-data">
                <div>
                  <p>{{collegeName}}</p>
                  <h1>迎新系统大数据平台</h1>
                </div>
              </div>
            </div>
            <div class="contain-left-header-data">
              <a style="position:relative;">
                <span style="color:#68cca0" >{{data.bdl}}</span>
                <div style="position:absolute;bottom:.8em;left:50%;transform:translate(-50%,0);">新生报到率(%)</div>
              </a>
              <a style="position:relative;">
                <span style="color:#84b7e9;">{{data.ydrs}}</span>
                <div style="position:absolute;bottom:.8em;left:50%;transform:translate(-50%,0);">应到人数</div>
              </a>
              <a style="position:relative;">
                <span style="color:#f57e82">{{data.sdrs}}</span>
                <div style="position:absolute;bottom:.8em;left:50%;transform:translate(-50%,0);">实到人数</div>
              </a>
            </div>
            <div class="clear"></div>-->
          </div> 
  </div>
</template>
<script>
import axios from 'axios'
import config from '../../../assets/config.js'
import pie from '../tool/piecharts'
export default {
  name: 'footer',
  data () {
    return {
      data:''
    }
  },
  created(){
     var _this = this;
    _this.getData();
    setInterval(() => {
        _this.getData()
      }, 10000);
  },
  methods:{
    getData:function(){
      var _this = this;
      new Promise((resolve,reject) => {
      axios.get(config.url+'ydyx/yxtj/yxtj_xsbdl.action').then((response) => {
          if(response.data.code == 40001){
            _this.data = response.data.content[0];
          }
        })
    });
    }
  }
}
</script>
<style scoped>
#header{

}
.contain-left-header{
  height:9em;
  background: white;
  border-radius: .3em;
}
.contain-left-header-log{
  position: relative;
  width:calc(25% - .875em);
  height: 100%;
  float: left;
}
.contain-left-header-log > img{
  position: absolute;
  /*width: 77%;*/
  top: 50%;
  left:2em;
  transform: translate(0,-50%);
}
.contain-left-header-meg{
  width: calc(75% - 1px);
  height: 100%;
  margin-left:.875em;
  float: left;
}
.contain-left-header-meg > div.message{
  width:calc(30% - 1px);
  height: 100%;
  float: left;
}
div.message>div.message-bdl{
  height:7em;
  line-height: 7.5em;
  text-align: center;
}
div.message>div.message-bdl > span{
  font-size:3em;
}
div.message>div.message-lx{
  height: 2em;
  text-align: center;
}


.contain-left-header-logo{
  width:calc(40% - 1px);
  float: left;
  text-align: left;
}
.contain-left-header-logo a.logo{
  display: inline-block;
  position: relative;
  width:6em;
  height:9.75em;
  line-height: 9.75em;
  color:#555555;
  float: left;
}
div.contain-left-header-logo-data{
  height:9.75em;
  float:left;
}
div.contain-left-header-logo-data>div{
  margin-top: 2.78125em;
}
.contain-left-header-logo a.logo > img{
  content: "";
  width: 4em;
  height:4em;
  display: block;
  position: absolute;
  left:50%;
  top: 45%;
  /*background: url("../../../assets/lglogo.png");*/
  background-size: contain;
  background-position: center;
  transform: translate(-50%,-50%);
}
.contain-left-header-data{
  width: calc(60% - 1px);
  margin-left: 1px;
  float: left;
}
.contain-left-header-data > a{
  display: block;
  position: relative;
  height:9.75em;
  line-height: 9.75em;
  width:calc(33.33% - 1px);
  float: left;
  text-align: center;
}
.contain-left-header-data > a >div{
  line-height: 1em;
}
.contain-left-header-data > a>span:first-child{
  font-size:3em;
}
</style>
