<template>
  <div>
  <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in looplist">
        	<img :src="data.imageUrl"/>
        </div>

      </div>
    </div>
   <ul>
   	<li v-for="data in datalist">
   		<img :src="data.cover.origin"/>
   		<h3>{{data.name}}</h3>
   	</li>
   </ul>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import Swiper from "swiper";//引入swiper.js 
// require("swiper/dist/css/swiper.css") //commonjs  引入 css写法
import "swiper/dist/css/swiper.css" //commonjs  引入 css写法
	export default {
		data(){
			return {
				looplist:[],
				datalist:[]
			}
		},

		mounted(){
			


			// setTimeout(() => {
			//   	this.looplist = ["111","222","333"];//异步更新到节点  

			//   	//以上节点更新到dom中
			//   	this.$nextTick(res=>{
			//   		var swiper = new Swiper('.swiper-container');
			//   	})
			// }, 1000)


			//请求轮播数据
			axios.get("/v4/api/billboard/home?__t=1539565079413").then(res=>{
				console.log(res.data);
				this.looplist = res.data.data.billboards;
				this.$nextTick(res=>{
			   		var swiper = new Swiper('.swiper-container',{
			   			
			   		});
			   	})
			})


			//请求ajax;
			//axios 第三方的ajax 库，基于promise封装,结果在res.data里面
			//注意跨域问题，
			axios.get("/v4/api/film/now-playing?__t=1539335050460&page=1&count=5").then(res=>{
				console.log(res.data)

				this.datalist= res.data.data.films
				// this.looplist = res.data.data.films;

				
			}).catch(error=>{
				console.log(error)
			})

			/*解决跨域问题
				
				反向代理 -配置config/index.js 改完后 要重启服务器
			*/
			// axios.get("/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wwmt70gy6fb&latitude=36.08431&limit=24&longitude=120.37148&offset=0&terminal=web").then(res=>{
			// 	console.log(res.data)
			// }).catch(error=>{
			// 	console.log(error)
			// })


			fetch("/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wwmt70gy6fb&latitude=36.08431&limit=24&longitude=120.37148&offset=0&terminal=web").then(res=>res.json()).then(res=>{
				console.log(res);
			})

			//axios.post
		}
	};
</script>
<style type="text/css" scoped lang="scss">
	
ul{
	li{
		padding:10px;
		img{
			width:100%;
		}
	}
}

.swiper-container{
	img{
		width: 100%;
	}
}
</style>