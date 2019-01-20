<template>
    <div>

        <router-view></router-view>
        <router-link to="/foo">foo</router-link> <br/>
        <router-link to="/bar">bar</router-link> <br/>
        <router-link to="/bar#anchor">bar#anchor</router-link>
        <p>
            通过history.go或浏览器前进后退键触发的跳转会是浏览器默认行为，会定位到上次的位置。<br>
            而通过router-view的跳转行为会被scrollBehavior影响
        </p>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from ,savedPosition){
        return {
            y: 200,
            x: 0
        }
        // if(to.hash){
        //     return {
        //         selector: to.hash
        //     }
        // }
        // return savedPosition;
        // if(savedPosition){
        //     console.log(savedPosition)
        //     return savedPosition;
        // }
        // return {
        //     x: 0,
        //     y: 0
        // }
    },
    routes: [
        {path: '/foo', component: () => import(/* webpackChunkName: "Foo" */ '@/components/Foo')},
        {path: '/bar', component: () => import(/* webpackChunkName: "Bar" */ '@/components/Bar2')},
        // {path: '/bar', component: (resolve) => require(['@/components/Bar'], resolve)},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

