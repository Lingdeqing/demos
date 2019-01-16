<template>
    <div>
        <router-link to="/user/1">user1</router-link> <br/>
        <router-link to="/user/2">user2</router-link> <br/>
        <router-link to="/user/3">user3</router-link> <br/>
        <router-link to="/user/4/post/1">user4-post1</router-link> <br/>
        <router-link to="/dynamic-redirect/1?postId=2">/dynamic-redirect/1?postId=2</router-link> <br/>
        <router-link to="/redirect-name">/redirect-name/3</router-link> <br/>

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
        {path: '/', redirect: '/user/2'},
        {path: '/dynamic-redirect/:id', redirect: to => {
            const {params, query} = to;
            let path = `/user/${params.id}`;
            if(query){
                path += '/post/' + query.postId
            }
            return path;
        }},
        {path: '/redirect-name', redirect: {name: 'user', params: {id: '3'}}},
        {path: '/:id', redirect: '/user/:id'},
        {path: '/user/:id', component: User, name: 'user'},
        {path: '/user/:id/post/:postId', component: UserPost},
        {path: '*', redirect: '/'}
    ]
})
export default {
    name: 'Start',
    router
}
</script>

