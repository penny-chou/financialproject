import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) //注册路由

import home from "../components/home.vue"
import film from "../components/film.vue"
import card from "../components/card.vue"
import detail from "../components/detail.vue"
import nowplaying from "../components/nowplaying.vue"
import comingsoon from "../components/comingsoon.vue"

export default new Router({
  //路由配置表	
  routes: [
    {
    	path:"/home",
    	component:home
    },
    {
    	path:"/film",
    	component:film, //里面要写嵌套路由
    	children:[
    		// /film/
    		{
    			path:"nowplaying", //film/nowplayinmg
    			component:nowplaying
    		},
    		{
    			path:"comingsoon", //film/nowplayinmg
    			component:comingsoon
    		},
            //重定向
            {
                path:"/",
                redirect:"/film/nowplaying"
            }
    	]
    },
    {
    	path:"/card",
    	component:card
    },

    {//动态路由， 写个占位符
        path:"/detail/:kerwinid",  //detail/dwdwa  /detail/4433 /detail/aaaa /detail/aaa
        // path:"/detail/:kerwinid/:kerwinid2",
        // path:"/detail/a/:kerwin",
        // path:"/detail/:kerwinid/a"    /detail/4433/a
        component:detail
    },
    {
        path:"*",
        redirect:"/home",
        // component:404Component
    }
  ]
})


/*

 1. 一个人负责前端路由搭建，创建好基本组件， 进行分工
 2. 上传git 远程仓库npm(不传node modules)
 3. git clone 下载此代码， cnpm install, 运行。
 4. 按照自己负责的组件进行开发， 开发之后 git add  git commit  git push 
 5. 别人想把你的代码合并到自己本地代码 git pull

 */


/*
    仓库管理员 - (new git 远程仓库， 添加组内成员为代码贡献者)

    培训组内git 使用
 */

/*其他组员

    调研页面的组件，

    *接口分析 （不熟悉后端，没有后端提供接口）
 */


/*

    10.2.156.225:8080 vue前端部署,反向代理 来解决。

    
    10.2.156.234:8080/home
 */


/*
	localhost:8080/#/home
	localhost:8080/#/film
	localhost:8080/#/card
 */