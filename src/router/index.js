import Vue from 'vue'
import Router from 'vue-router'
import Practice from '@/components/Practice'
import Home from '@/components/Home'
import Computed from '@/components/nav1/Computed'
import Array from '@/components/nav1/Array'
import Vuex from '@/components/nav1/Vuex'
import Pages4 from '@/components/nav2/Pages4'
import Pages5 from '@/components/nav3/Pages5'
import Pages6 from '@/components/nav4/Pages6'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '导航一',
            component: Home,
            navIcon:'el-icon-location',
            children: [
                {path: '/computed', name: 'Computed', component: Computed},
                {path: '/array', name: 'Array', component: Array},
                {path: '/vuex', name: 'Vuex', component: Vuex}
            ]
        },
        {
            path: '/',
            name: '导航二',
            component: Home,
            navIcon:'el-icon-menu',
            leaf:true,
            children: [
                {path: '/pages4', name: 'Pages4', component: Pages4},
            ]
        },
        {
            path: '/',
            name: '导航三',
            component: Home,
            navIcon:'el-icon-document',
            leaf:true,
            children: [
                {path: '/pages5', name: 'Pages5', component: Pages5},
            ]
        },
        {
            path: '/',
            name: '导航四',
            component: Home,
            navIcon:'el-icon-setting',
            leaf:true,
            children: [
                {path: '/pages6', name: 'Pages6', component: Pages6},
            ]
        }
    ]
})
