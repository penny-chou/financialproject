<template>
  <nav>
  <div class="left">
    <slot></slot>
  	<span>{{title}}</span>
  </div>

  <div class="right">
  	<span>大连</span>
  	 <i class="iconfont icon-account"></i>
  </div>
  </nav>
</template>
<script type="text/javascript">
	import {mapState}  from "vuex"; //export {mapState}
	// es6 导出 var a= "" export default a   
	// es6 导入 import aa from "./dw";


	// es6 导出 var a = "" var b=""  export {a,b}
	// es6 导入  import  {a,b} from "./dw"
	export default {

		computed:{
			// getTitle(){
			// 	return this.$store.state.title;
			// }
			...mapState(["title"])  //  
			// ...是展开运算符
			// 
			// {
				// title(){
				// 	return this.$store.state.title;
				// }
			// }
		//key:value
		}
	};
</script>
<style type="text/css" scoped lang="scss">
nav{
	z-index:10;
	position: fixed;
	left:0px;
	top:0px;
	width:100%;
	height: 50px;
	background-color: black;
	color:white;
	line-height: 50px;
	.left{
		float: left;
	}
	.right{
		float: right;
	}
}
</style>