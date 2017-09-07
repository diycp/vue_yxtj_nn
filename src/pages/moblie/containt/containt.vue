<template>
  <div id="other-containt">
     <div class="other-containt-header">
       <span><a v-bind:class="{'router-link-active':active[0]}" v-on:click="togo('/containt/region',0)">按地区</a></span>
       <span><a v-bind:class="{'router-link-active':active[1]}" v-on:click="togo('/containt/college',1)">按学院</a></span>
       <!-- <span><a v-bind:class="{'router-link-active':active[2]}" v-on:click="togo('/containt/campus',2)">按校区</a></span> -->
     </div>
     <router-view></router-view>
 </div>
</template>
 <script>
 import axios from 'axios'
 import store from '../vuex/store'
 export default {
  name: 'other-containt',
  data:function(){
    return {
      pieid1:'001',
      active:[true,false,false]
    }
    },
  created(){
    
    },
  components:{
  },
  methods:{
    togo:function(path,stus){
      var _this = this;
      _this.active.forEach(function(r,i){
        console.log(i+"/"+stus)
        if(i == stus){
          _this.active[i] = true;
        }else{
          _this.active[i] = false;
        }
      })
      console.log(_this.active)
      sessionStorage.setItem('goback',false);
      _this.$router.push(path)
  }
}
}
</script>
<style>
/*#other-containt span{
  font-size:0.26em;
}*/
.other-containt-header{
  text-align: center;
}
.other-containt-header span{
  font-size:16px!important;
  font-weight: bold;
  color: #999999;
}
a{
  text-decoration: none;
   color: #999999;
}
.router-link-active{
  color:#333333;
}
</style>
