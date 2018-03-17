// 

global.NODE_ENV = process.env.NODE_ENV || 'development'
global.DEVELOPMENT = NODE_ENV == 'development'
global.PRODUCTION = NODE_ENV == 'production'

process.NAME = process.env.NAME
process.VERSION = process.env.VERSION
process.DOMAIN = process.env.DOMAIN

// 

import '@ibm/plex/css/ibm-plex.css' // typography font assets
import 'mdi/css/materialdesignicons.css' // icon assets

import '@/client/services/pwa-service-worker'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Buefy, { BuefyConfig } from 'buefy'



// ninjas don't need tips :P
Vue.config.productionTip = false
Vue.config.performance = false
Vue.config.devtools = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Buefy, {
	defaultSnackbarDuration: 5000,
	defaultToastDuration: 5000,
	defaultInputAutocomplete: 'off',
	defaultNoticeQueue: false,
	defaultTooltipType: 'is-dark',
} as BuefyConfig)



// ESNext dynamic import syntax for webpack chunks
import('@/client/vm')


