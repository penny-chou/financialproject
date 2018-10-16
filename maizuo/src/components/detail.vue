<template>
  <div v-if="filminfo">

     <img :src="filminfo.cover.origin"/>
     <h2>{{filminfo.name}}</h2>
     <p>{{filminfo.synopsis}}</p>
  </div>
</template>
<script type="text/javascript">
	import axios from "axios";
	export default {
		data(){
			return {
				filminfo:null, //一开始是假 v-if不会渲染 
			}
		},
		mounted(){
			// location.href
			// 路由对象以及参数 在 this.$route;
			console.log(this.$route.params.kerwinid);
		
			axios.get(`/v4/api/film/${this.$route.params.kerwinid}?__t=1539571298758`).then(res=>{
				console.log(res.data)

				this.filminfo = res.data.data.film //影片的详细信息

				// res.data.data.film.name;
				// 通过一种方法 改变 在store 中title  直接通过this.$store.state.title.
				
				this.$store.commit("kerwinchangetitle",res.data.data.film.name)
			})
		}
	};
</script>
<style type="text/css" scoped lang="scss">
	img{
		width: 100%;
	}

</style>