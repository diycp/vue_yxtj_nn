<template>
  <div id="footer">
      <div class="footer-list" v-for="(item,index) in data">
      	<div class="footer-list-header"><span>{{item.hjmc}}</span></div>
      	<div class="footer-list-data">
      		<div class="footer-list-data-pie">
      			<div class="footer-list-data-stus">
      				<a class="one">已办理</a>
      				<a class="two">未办理</a>
      			</div>
      			<div class="footer-list-data-pie1">
      				<v-pie :radius="radiusPie" :colors="colorjf" :title="item.hjmc" :name="name.bxbl" :data="item"></v-pie>
      			</div>
      		</div>
      		<div class="footer-list-data-sj">
      			<table>
      				<tr>
      					<td>状态</td>
      					<td>人数</td>
      					<td>占比</td>
      				</tr>
      				<tr>
      					<td>已办理</td>
                <td>{{item.wcrs}}</td>
                <td>{{item.wcl}}%</td>
      				</tr>
      				<tr>
      					<td>未办理</td>
      					<td>{{item.syrs}}</td>
                <td>{{item.wwcl}}%</td>
      				</tr>
      			</table>
      		</div>
      	</div>
      </div>
      <div style="clear:both;"></div>
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
      radiusPie: ['50%', '80%'],
      radiusPie1: '90%',
      data:'',
      data1:'',
      yj:'#ceb5db',
      wj:'#ffb1b4',
      bx1:'#78cddc',
      bx2:'#ffdd8b',
      ls1:'#80bdf6',
      ls2:'#68cca0',
      ys1:'#cef48c',
      ys2:'#facd89',
      name:{'bxbl':['已办理','未办理']}
    }
  },
  created:function(){
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
      axios.get(config.url+'ydyx/yxtj/yxtj_xsnvbltj.action').then((response) => {
          if(response.data.code == 40001){
            _this.data = response.data.content.hjblqk;
            // resolve(response.data.content.hjblqk);
          }
        })
    });
    }
  },
  components:{
  	'v-pie':pie
  },
  computed:{
  	 colorjf:function(){
            var arr = [];
            arr.push(this.yj);
            arr.push(this.wj);
            return arr;
        },
     colorbx:function(){
     		var arr = [];
            arr.push(this.bx1);
            arr.push(this.bx2);
            return arr;
     },
     colorls:function(){
     		var arr = [];
            arr.push(this.ls1);
            arr.push(this.ls2);
            return arr;
     },
     colorys:function(){
     		var arr = [];
            arr.push(this.ys1);
            arr.push(this.ys2);
            return arr;
     }
  }
}
</script>
<style scoped>
/* footer */
#footer{
  margin: .8em 0em;
  /*height:13em;*/
}
.footer-list{
  width:calc(25% - .6em);
  background: white;
  border-radius: .3em;
  float: left;
}
.footer-list:nth-child(n+2){
  margin-left:.8em;
}
.footer-list:nth-child(4n+1){
  margin-left:0em;
}
.footer-list:nth-child(n+5){
  margin-top: .875em;
}
.footer-list-header{
  border-bottom: 1px solid #cccccc;
  padding:.3em 0em;
  text-align: left;
}
.footer-list-header span{
	margin-left:.5em;
}
.footer-list-data-pie{
	width:calc(45% - 1px);
	height:8em;
	float: left;
}
.footer-list-data-sj{
	width:calc(55% - 1px);
	float: left;
}
.footer-list-data-stus{
	text-align: left;
}

.footer-list-data-stus > a{
	display: inline-block;
	position: relative;
	height: 1em;
	line-height: 1em;
	margin-left:1.5em;
	margin-top:1em;
}
.footer-list-data-stus > a.two::before,.footer-list-data-stus > a.one::before,
.footer-list-data-stus > a.three::before,.footer-list-data-stus > a.four::before,
.footer-list-data-stus > a.five::before,.footer-list-data-stus > a.six::before,
.footer-list-data-stus > a.eight::before,.footer-list-data-stus > a.nine::before
{
	content:"";
	position: absolute;
	display: block;
	width:1em;
	height:.6em;
	top:50%;
	left:-1.2em;
	background: #ceb5db;
	transform: translate(0,-50%);
}
.footer-list-data-stus > a.one::before{
	background: #ceb5db;
}
.footer-list-data-stus > a.two::before{
	background: #fdafb2;
}
.footer-list-data-stus > a.three::before{
	background: #78cddc;
}
.footer-list-data-stus > a.four::before{
	background: #ffdd8b;
}
.footer-list-data-stus > a.five::before{
	background: #80bdf6;
}
.footer-list-data-stus > a.six::before{
	background: #68cca0;
}
.footer-list-data-stus > a.eight::before{
	background: #cef48c;
}
.footer-list-data-stus > a.nine::before{
	background: #facd89;
}
.footer-list-data-pie1{
	width:100%;
}
.footer-list-data-sj > table{
	width:100%;
	margin-top: .65em;
	padding:0px;
}
.footer-list-data-sj > table tr td{
	padding:0em 0em 1em 0em;
}
</style>
