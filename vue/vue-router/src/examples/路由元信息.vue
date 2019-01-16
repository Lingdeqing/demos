<template>
    <div>
        <router-link to="/user/1">user1</router-link> <br/>
        <router-link to="/user/2">user2</router-link> <br/>
        <router-link to="/user/3">user3</router-link> <br/>
        <router-link to="/user/4/post/1">user4-post1</router-link> <br/>
        <router-link to="/error">error</router-link> <br/>
        <router-link to="/foo/1">/foo/1</router-link> <br/>
        <router-link to="/foo/2">/foo/2</router-link> <br/>
        <router-link to="/foo/3">/foo/3</router-link> <br/>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '@/components/User';
import UserPost from '@/components/UserPost';
import NotFound from '@/components/404';
import Foo from '@/components/Foo2';

Vue.use(VueRouter);

/* eslint-disable */

const router = new VueRouter({
    routes: [
        {path: '/404/*', component: NotFound},
        {path: '/user/:id', component: User, 
            meta: {
                requiresAuth: true
            }
        },
        {path: '/user/:id/post/:postId', component: UserPost},
        {path: '/foo/:id', component: Foo, props: true},
    ]
})

router.beforeEach(function(to, from, next){
    if(to.matched.some(record => record.meta.requiresAuth)){
        next('/404/需要登录');
    } else {
        next();
    }
})
/* eslint-enable */
export default {
    name: 'Start',
    router
}
</script>

