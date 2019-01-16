<template>
    <div>
        <router-view></router-view>
        <router-view name="foo"></router-view>
        <router-view name="bar"></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import NotFound from '@/components/404';
import Foo from '@/components/Foo';
import Bar from '@/components/Bar';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', components: {
            default: NotFound,
            foo: Foo,
            bar: Bar            
        }},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

