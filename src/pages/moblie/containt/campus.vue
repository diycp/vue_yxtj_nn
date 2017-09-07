<template>
  <div id="other-campus">
     <div class="other-campus">
        <table>
          <tr>
            <th>校区</th>
            <td>实到</td>
            <td>应到</td>
            <td>报到率</td>
          </tr>
          <tr v-for="item in data">
            <th>{{item.xq}}</th>
            <td>{{item.sdrs}}</td>
            <td>{{item.ydrs}}</td>
            <td>{{item.bl}}</td>
          </tr>
        </table>
     </div>
 </div>
</template>
 <script>
 import axios from 'axios';
 import store from '../vuex/store';
 import config from '../../../assets/config.js'

 export default {
  name: 'other-campus',
  data:function(){
    return {
      // data:[{'xqdm':'001',xqmc:'兰花湖校区',ydrs:'3000',wdrs:'500',zrs:'3500',bdl:'85.7'},
      //       {'xqdm':'001',xqmc:'江北校区',ydrs:'3000',wdrs:'500',zrs:'3500',bdl:'85.7'},
      //       {'xqdm':'001',xqmc:'南岸校区',ydrs:'3000',wdrs:'500',zrs:'3500',bdl:'85.7'}
      // ]
      data:''
    }
    },
    created(){
      var _this = this;
      this.data = new Promise((resolve,reject) => {
        axios.get(config.url+'ydyx/yxtj/yxtj_xqbdl.action').then((response) => {
          if(response.data.code == 40001){
           _this.data = response.data.content;
          }
        })
      });
      this.$store.dispatch('set_historypath','/campus').then(res => {});
      // this.$store.dispatch('set_goback','true').then(res => {});
      sessionStorage.setItem('goback',true);
    }
}
</script>
<style>
#other-campus{
  font-size: 16px;
}
</style>
