<template>
    <div>
        <router-link to="/user/1">user1</router-link> <br/>
        <router-link to="/user/2">user2</router-link> <br/>
        <router-link to="/user/3">user3</router-link> <br/>
        <router-link to="/user/4/post/1">user4-post1</router-link> <br/>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '@/components/User';
import UserPost from '@/components/UserPost';
import NotFound from '@/components/404';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/user/:id', component: User},
        {path: '/user/:id/post/:postId', component: UserPost},
        {path: '/user-*', component: NotFound},
        {path: '*', component: NotFound},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

