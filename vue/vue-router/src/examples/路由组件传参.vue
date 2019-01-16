<template>
    <div>
        <router-link to="/user/1">user1</router-link> <br/>
        <router-link to="/user/1?q=3">user?q=3</router-link> <br/>

        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '@/components/User2';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User, 
            // props: true 
            // props: {
            //     id: '2'
            // }

            props(route){
                return {
                    id: route.query.q || route.params.id
                }
            }
            },
    ]
})
export default {
    name: 'Start',
    router
}
</script>

