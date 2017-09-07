<template>
  <div id="app">
    <div ref="menu-wrapper1" style="height:1000px;width:100%;">xxx</div>
  </div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'
import china from '../../assets/china' 
import config from '../../assets/config.js'

export default {
  name: 'app',

data () {
    return {
		mapData: {},
		option:''
    }
},
created:function(){
	this.option = {
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: 5000,
          left: 'right',
          top: 90,
          text: ['高', '低'],           // 文本，默认为数值文本
          calculable: true,
          itemWidth: 5,
          itemHeight: 80,
          inRange: {
            color: ['#e0ffff', '#006edd']
          }
        },
        toolbox: {
          show: false,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '生源情况',
          type: 'map',
          mapType: 'china',
          roam: false,
          layoutSize: 10000,
          aspectScale: 0.75,
          scaleLimit: {min: 0.8, max: 1.1},
          top: 15,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#F06C00',
              borderColor: '#63d4fc'
            }
          },
          data: ''
        }]
      }
	},
	mounted(){
		var _this = this;
	  new Promise((resolve,reject) => {
        axios.get(config.url+'ydyx/yxtj/yxtj_dqbdl.action').then((response) => {
          if(response.data.code == 40001){
            resolve(response.data.content.seriesData_yd);
          }
        })
      }).then(function(rs){
      	  rs.forEach(function(r,i){
      	  	r.value = Number(r.value);
      	  })
      	  _this.option.series[0].data = rs;
      	  // _this.option.series[0].data = [{name: '天津', value: 887},
         //        {name: '上海', value: 587},
         //        {name: '重庆', value: 187},
         //        {name: '河北', value: 953},
         //        {name: '河南', value:334},
         //        {name: '云南', value: 554},
         //        {name: '辽宁', value: 142},
         //        {name: '黑龙江', value: 42}]
		  _this.mapData = china.china;
		  echarts.registerMap('china', _this.mapData);
		  _this.chart = echarts.init(_this.$refs['menu-wrapper1']);
		  _this.chart.setOption(_this.option);
      });
	   
	}
}
</script>
<style>
	
</style>
