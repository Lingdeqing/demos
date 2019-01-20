<template>
    <div>
        <router-link to="/post/0">post-1</router-link> <br/>
        <router-link to="/post/1">post-2</router-link> <br/>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import Post from '@/components/Post2';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/post/:id', component: Post, props: true},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

