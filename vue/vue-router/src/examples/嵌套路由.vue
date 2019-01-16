<template>
    <div>
        <router-link to="/user/1">user1</router-link> <br/>
        <router-link to="/user/2/profile">user2 profile</router-link> <br/>
        <router-link to="/user/3/posts">user3 posts</router-link> <br/>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '@/components/User1';
import Profile from '@/components/Profile';
import UserPosts from '@/components/UserPosts';
import NotFound from '@/components/404';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/user/:id', component: User, 
            children: [
                {
                    path: '',
                    component: NotFound
                },
                {
                    path: 'profile',
                    component: Profile
                },

                {
                    path: 'posts',
                    component: UserPosts
                }
            ]
        },
    ]
})
export default {
    name: 'Start',
    router
}
</script>

