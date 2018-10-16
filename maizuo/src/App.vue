<template>
  <div>
    <navbar >
      <i class="iconfont icon-category" @click="isShow=!isShow"></i>
    </navbar>
    <sidebar v-show="isShow">
      <ul @click="isShow=!isShow">
        <router-link tag="li" to="/home" activeClass="kerwinactive">home</router-link>
        <router-link tag="li" to="/film" activeClass="kerwinactive">film</router-link>
        <router-link tag="li" to="/card" activeClass="kerwinactive">card</router-link>
      </ul>
    </sidebar>
    <!-- 路由容器-类似插槽 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script type="text/javascript">
  
//vue.compoennt("hello",{})
//模块化写法 commonJs  module.exports
//           ES6模块   export default
// Vue.componnent("hello",{
//   template:`<div>dwadwa</div>`
// })
import navbar from "./components/navbar";
import sidebar from "./components/sidebar";
export default {
  data(){
    return {
      name:"11111111",
      isShow:false
    }
  },
  methods:{
    handleEvent(){
      console.log("handleEvent");
      this.isShow=  !this.isShow
    }
  },
  components:{
    navbar,
    sidebar
  },//所有导入进来组件是 局部组件 ，需要我们注册

  computed:{

  }
};
//导出组件 都是局部组件。
</script>

<style >
  *{
    margin: 0px;
    padding: 0px;
  }

  html,body{
    height: 100%;
  }


  li{
    list-style: none;
  }

  div{
    /* background: red; */
  }

  section{
    position: relative;
    top: 50px;
  }
</style>