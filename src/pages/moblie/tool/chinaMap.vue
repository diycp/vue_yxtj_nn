<template>
    <div class="map">
        <a id="mapconent" style="width:100%;height:220px;" ref="menu-wrapper1" class="mapsize"></a>
        <div ref="wrapper">
          <div class="mapData" id="wrapper1">
              <a v-for="item in itemData" ref="mapData" :name="item.name" :value="item.value">
                  <span></span>
                  <span>{{item.name}}</span>
              </a>
          </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import china from '../../../assets/china'
import BScroll from 'better-scroll';

export default {
  name: 'map',
  data () {
    return {
      chart: {},
      mapData: {},
      datav:'',
      datam:[],
      itemData:'',
      valueTotal:'',
      maxValue:'',
      option: {
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
    }
  },
  props: ['data'],
  watch: {
    // datav:function(val,oldval){
    //   setTimeout(() => {
        
    //   },0)
    // },
    datam:function(val,oldval){
      this.option.series[0].data = val;
      this.itemData = this.itemDataMethod();
      setTimeout(() => {
        this.maxValue = this.maxValueMethod();
        this.createItem();
        this.createScroll();
        this.valueTotal = this.valueTotalMethod();
    },0)
       setTimeout(() => {
      this.createMap();
      },0)
      
    }
  },
  created () {
     var _this = this;
     this.data.then(function(rs){
          // _this.datav = rs.seriesData;
          _this.datam = rs.seriesData_yd;
          _this.datam.forEach(function(r,i){
            r.value = Number(r.value);
          })
     })
  },
  computed: {
  },
  methods: {
    randomData: function () {
      return Math.round(Math.random() * 1000)
    },
    createMap: function () {
          this.mapData = china.china;
          echarts.registerMap('china', this.mapData);
          this.chart = echarts.init(this.$refs['menu-wrapper1']);
          console.log(this.option)
          this.chart.setOption(this.option);
    },
    createItem: function () {
      var arr = this.$refs['mapData']
      var oneP = 4 / this.maxValue
      for (var i = 0; i < arr.length; i++) {
        arr[i].getElementsByTagName('span')[1].style.visibility = "visible";
        arr[i].getElementsByTagName('span')[0].style.visibility = "visible";
        arr[i].getElementsByTagName('span')[0].style.height = arr[i].attributes['value'].value * oneP + 'em'// 修改dom样式
      }
      var arr = this.$refs['mapData'].length;
      this.$refs.wrapper.getElementsByTagName('div')[0].style.width=(7.188+15)* arr+"px";
    },
    createScroll:function(){
      var scroll = new BScroll(this.$refs.wrapper,{scrollX:true,startX: 0,startY: 0,bounce: true});
    },
    itemDataMethod: function () {
      return this.option.series[0].data
    },
    valueTotalMethod: function () {
      var total = 0
      for (var i = 0; i < this.itemData.length; i++) {
        total += this.itemData[i].value
      }
      return total
    },
    maxValueMethod: function () {
      var arrValue = []
      for (var n = 0; n < this.itemData.length; n++) {
        arrValue.push(this.itemData[n].value)
      }
      return Math.max.apply(null, arrValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  /*font-size:14px;*/
 /* overflow-y: hidden;
  overflow-x: hidden;*/
  overflow: hidden;
}
#mapconent{
    display:inline-block;
}
.mapData{
    font-size: 14px;
    height:9em;
    padding:.1em 0em;
    margin:auto;
    white-space:nowrap ;
}
.mapData a{
    display: inline-block;
    position: relative;
    height:3em;
    line-height:3em;
    margin:0em .5em 3em .5em;
    white-space:nowrap; 
}
.mapData a span:nth-child(2n-1){
    display: inline-block;
    visibility:hidden;
    width:.6em;
    height:4em;  
    line-height: 4em;
    border-radius: .5em;
    background: #00b6f8;
}
.mapData a span:nth-child(2n){
    display: block;
    visibility:hidden;
    position: absolute;
    left:40%;
    font-size: 12px;
    width:10px;
    height:3em;
    line-height:1.2em;
    vertical-align: bottom;
    /*transform:rotate(90deg); */
    white-space: normal;
    transform: translate(-50%,0);
}
</style>
