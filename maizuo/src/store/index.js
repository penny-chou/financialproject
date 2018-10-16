import Vuex from "vuex";
import Vue  from "vue";
import axios from "axios";
Vue.use(Vuex);//注册vuex

const store = new Vuex.Store({

	state:{
		//放所有要共享的状态-名字随意
		title:"卖座电影111",
		list:[] //存即将上映的数据
	},

	//改变
	mutations:{
		kerwinchangetitle(state,payload){
			console.log("我被调用了",payload);
			state.title= payload;
			//唯一修改state的地方
			//只能做同步
		},
		kerwingetListMutation(state,payload){
			state.list = payload;//即将上映的数据
			// push pop
		}
	},

	actions:{
		//处理异步的地方
		kerwingetList(store,payload){
			console.log("kerwingetList");

			axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
				console.log(res.data);
				store.commit("kerwingetListMutation",res.data.data.films)//提交mutations状态修改
			})
		}
	}
})//创建一个store 对象

export default store;


// 1. vuex 干什么？
// 
// （1）复杂非父子通信  (2) 数据快照 ，做数据缓存，同一个页面的数据不需要重复请求， 提高用户体验。
// 2. vuex 分为几层？
//  (1)actions (2) mutations (3) state
//  
//  3. vuex流程是怎样？
//  
//  4. mutations 干啥？
//  (1)唯一改变状态的地方 (2) 同步处理
//  5. 异步在哪？
//  actions
//  6. state 存放共享的状态
//  通过this.$store.state.*
