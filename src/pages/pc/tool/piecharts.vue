<template>
    <div class="piecharts" >
        <a ref="menu-wrapper1" style="width:11.4em;height:5.56em;display:block;"></a>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'piecharts',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gy: {},
      qyfb: []
    }
  },
  props:['radius','colors','name','title','data'],
  created () {
    var _this = this;
    this.$nextTick(function () {
      var i =0;
      // var colors=['#ceb5db','#ffb1b4'];
      var colors = this.colors; 
      var op = {
        tooltip: {
          trigger: 'item',
          position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        },
          formatter: ' {a} <br/>{b}: {c} ({d}%) '
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: this.radius,
            avoidLabelOverlap: false,
            center:['45%','60%'],
            hoverAnimation:false,
            itemStyle : {  
                      normal : {  
                          color:function(){  
                              return colors[i++];   
                              },  
                          label : {  
                              show : false  
                          },  
                          labelLine : {  
                              show : false  
                          }  
                      }
                  },  
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: _this.data.wcrs, name: this.name[0]},
              {value: _this.data.syrs, name: this.name[1]}
            ]
          }
        ]
      }
      this.chart = echarts.init(this.$refs['menu-wrapper1'])
      this.chart.setOption(op)
    })
  },
  metheds: {
    createPie: function () {
      console.log(this.$refs['menu-wrapper1'])
    }
  }
}
</script>
<style scoped>
.piecharts{
  height:100%;
}
</style>
