<template>
	<transition name="bounce">
	<aside>
		<!-- <ul>
			<li><a href="#/home">home</a></li>
			<li><a href="#/film">film</a></li>
			<li><a href="#/card">card</a></li>
		</ul> -->
		<slot></slot>
	</aside>
	</transition>
</template>

<script type="text/javascript">


	//router-link 加上activeclass属性后  自动关联路径 给相应的router-link  加上高亮
	//监听了 hash 改变 window.onhashchange = function(){
	//},
	//将匹配的路径 自动加上class= “kerwinactive"
	//
	export default {

	};
</script>

<style type="text/css"  lang="scss">
	aside{
		position: fixed;
		top:50px;
		left:0px;
		width: 50%;
		height: 100%;
		background-color: black;
		color:white;
		z-index:10;
		li{
			padding:10px;
		}
	}

	.kerwinactive{
		background:blue;
	}

	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: translateX(-100%);
	    /*自身的100%*/
	    opacity: 0;
	  }
	  
	  100% {
	    transform: translateX(0px);
	    opacity: 1;
	  }
	}
</style>