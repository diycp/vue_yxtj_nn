<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
	@media (min-width: 1080px){ body{
		font-size: 10px;}
		 	}
	@media (min-width: 1366px){ body{font-size: 16px} }
	@media (min-width: 1770px){ body{font-size: 18px} }
	@media (min-width: 2000px){ body{font-size: 20px} }
	  @font-face{
  /*font-family: PingFang-SC-Medium;*/
  font-family: 'Microsoft YaHei';
  src: url('./icomoon/PingFang-Medium.ttf');
}
#app{
  /*font-family:PingFang-SC-Medium;*/
    font-family: 'Microsoft YaHei';
}
</style>
