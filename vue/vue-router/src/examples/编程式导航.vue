<template>
    <div>


        <button @click="goTo('/user/1')">/user/1</button>
        <button @click="goTo('/user/2')">/user/2</button>
        <button @click="goTo('/user/3/post/1')">/user/3/post/1</button>
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
        {path: '/user/:id', component: User},
        {path: '/user/:id/post/:postId', component: UserPost},
    ]
})
export default {
    name: 'Start',
    router,
    methods: {
        goTo(path){
            this.$router.push(path, () => {
                console.log('跳转成功')
            }, () => {
                console.log('跳转中断')
            })
        }
    }
}
</script>




