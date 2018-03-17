// 

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'



export const routes = [

	{
		name: 'home', path: '/', component: () => import('@/client/routes/home/home'),
	},



	{ path: '*', redirect: { name: 'home' } },

] as Array<RouteConfig>



export default new VueRouter({
	routes, mode: 'history',
})


