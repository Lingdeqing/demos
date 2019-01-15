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

import Foo from '@/components/Foo';
import Bar from '@/components/Bar';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

