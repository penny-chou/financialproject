// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router';//引入模块只写文件夹， 自动找当前文件夹里的index.js
import App from "./App";//局部组件
import store from "./store";


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store:store,
  store, // store 在任何位置 都可以通过 this.$store 来访问此"全局"对象
  components: { App },
  template: '<App></App>'
})


//之前<script src="lib/vue.js">
//
//现在 模块引入
//	a. commonJs  -  var a = require("vue");
//	b. ES6(ES2015) 模块引入 import a from "vue";