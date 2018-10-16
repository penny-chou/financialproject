<template>
  <div>
   	<ul>
   		<router-link to="/film/nowplaying" activeClass="active" tag="li">正在热映</router-link>
   		<router-link to="/film/comingsoon" activeClass="active" tag="li">即将上映</router-link>
   	</ul>
   	<!-- 二级路由容器 -->
   	<router-view></router-view>
  </div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		mounted(){
			this.$store.commit("kerwinchangetitle","卖座电影");
		}
	};
</script>
<style type="text/css" scoped lang="scss">
	
ul{
	display: flex;
	li{
		flex:1;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
}

.active{
	border-bottom:5px solid red;
	color:red;
}
</style>