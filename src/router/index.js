import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Computed from '@/components/vue/Computed'
import Array from '@/components/vue/Array'
import Form from '@/components/vue/Form'
import Vuex from '@/components/vuex/Vuex'
import VueResource from '@/components/vue-resource/VueResource'
import Mock from '@/components/mock/Mock'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'vue',
            component: Home,
            /*navIcon:'el-icon-location',*/
            children: [
                {path: '/computed', name: 'computed', component: Computed},
                {path: '/array', name: 'array', component: Array},
                {path: '/form', name: 'form', component: Form}
            ]
        },
        {
            path: '/',
            name: 'vuex',
            component: Home,
            /*navIcon:'el-icon-menu',*/
            leaf:true,
            children: [
                {path: '/vuex', name: 'vuex', component: Vuex},
            ]
        },
        {
            path: '/',
            name: 'vue-resource',
            component: Home,
            /*navIcon:'el-icon-document',*/
            leaf:true,
            children: [
                {path: '/vue-resource', name: 'vue-resource', component: VueResource},
            ]
        },
        {
            path: '/',
            name: 'mock',
            component: Home,
            /*navIcon:'el-icon-setting',*/
            leaf:true,
            children: [
                {path: '/mock', name: 'mock', component: Mock},
            ]
        }
    ]
})
