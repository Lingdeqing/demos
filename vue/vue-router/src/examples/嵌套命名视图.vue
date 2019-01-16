<template>
    <div>
        <router-link to="/settings/emails">/settings/emails</router-link><br>
        <router-link to="/settings/profile">/settings/profile</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import Emails from '@/components/Emails';
import Profile from '@/components/Profile';
import Settings from '@/components/Settings';
import Helper from '@/components/Helper';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/settings', component: Settings,
        children: [
            {
                path: 'emails',
                component: Emails
            },
            {
                path: 'profile',
                components: {
                    default: Profile,
                    helper: Helper
                }
            }
        ]}
    ]
})
export default {
    name: 'Start',
    router
}
</script>

