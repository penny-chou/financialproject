<template>
  <div>
   commingsoon

   	<ul>
   		<li v-for="data in list" >
   			<img :src="data.poster.origin"/>
   			<h3>{{data.name}}</h3>
   			<p>{{data.intro}}</p>
   		</li>
   	</ul>
  </div>
</template>
<script type="text/javascript">
	import {mapState} from "vuex";
	export default {
		data(){
			return {

			}
		},

		computed:{
			...mapState(["list"])

			// list:function(){
			// 	return this.$store.state.list
			// }
		},

		mounted(){

			if(this.$store.state.list.length==0){
				//走一遍vuex 流程,在actions
				this.$store.dispatch("kerwingetList","传的参数");
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