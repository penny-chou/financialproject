<template>
  <div>
   	<ul>
   		<li v-for="data in datalist" @click="handleClick(data.id)">
   			<img :src="data.poster.origin"/>
   			<h3>{{data.name}}</h3>
   			<p>{{data.intro}}</p>
   		</li>
   	</ul>
  </div>
</template>
<script type="text/javascript">
	import axios from "axios";
	import kerwinrouter from "../router";
	export default {
		data(){
			return {
				datalist:[]
			}
		},

		mounted(){
			axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
				console.log(res.data);
				this.datalist = res.data.data.films
			})
		},
		methods:{
			handleClick(id){
				console.log(id);
				//跳转页面 -- location.href可以， 路由跳转
				kerwinrouter.push(`/detail/${id}`);
				// /detail/4433 二级路由， 没有配置 只能重定向
			}
		}
	};
</script>
<style type="text/css" scoped lang="scss">
	
ul{
	li{
		overflow: hidden;
		padding:10px;
		img{
			width: 100px;
			float: left;
		}
	}
}
</style>