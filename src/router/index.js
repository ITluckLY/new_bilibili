/**
 *
 * @author 洋哥
 * @create 2020-02-19 17:21
 **/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "views/home/Home";
import Category from "views/category/Category";
import Cart from "views/cart/Cart";
import Profile from "views/profile/Profile";

//赖加载
/*
const Home =() => import('./views/home/Home.vue')
const Category =() => import('./views/category/Category.vue')
const Cart =() => import('./views/cart/Cart.vue')
const Profile =() => import('./views/profile/Profile.vue')
*/


Vue.use(VueRouter)

const routes = [
  {
		path:'',
		redirect:'/home',//重定向
		meta:{ //原数据
			title:'首页'
		}
	},
  {
    path: '/home',
    name: 'home',
    component: Home,
		children:[ //引入子组件
			// {path:'news',component:News},
			// {path:'info',component:Info}
		]
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
  },
	{
		path:'/cart',
		component:Cart,
	},
	{
		path:'/profile',
		component:Profile,

	}
]

//创建vue-router
const router = new VueRouter({
  routes,
  mode: 'history', //修改url展示前面的# 号。
  // base: process.env.BASE_URL,
})

// 最后导出 vue-router
export default router
