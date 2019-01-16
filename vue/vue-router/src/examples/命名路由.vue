<template>
    <div>
        <router-link :to="{name: 'user', params: {id: '1'}}">user1</router-link> <br/>
        <router-link to="/user/2">user2</router-link> <br/>
        <router-link to="/user/3">user3</router-link> <br/>
        <router-link to="/user/4/post/1">user4-post1</router-link> <br/>
        <router-link :to="{name: 'user-post', params: {id: '1', postId: '2'}}">user4-post2</router-link> <br/>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '@/components/User';
import UserPost from '@/components/UserPost';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/user/:id', component: User, name: 'user'},
        {path: '/user/:id/post/:postId', component: UserPost, name: 'user-post'},
    ]
})
export default {
    name: 'Start',
    router
}
</script>

