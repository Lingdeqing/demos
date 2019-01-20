<template>
    <div>
        <router-link to="/foo">foo</router-link> <br/>
        <router-link to="/bar">bar</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/foo', component: () => import(/* webpackChunkName: "Foo" */ '@/components/Foo')},
        {path: '/bar', component: () => import(/* webpackChunkName: "Bar" */ '@/components/Bar')},
        // {path: '/bar', component: (resolve) => require(['@/components/Bar'], resolve)},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

