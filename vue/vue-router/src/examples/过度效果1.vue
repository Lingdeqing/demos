<template>
    <div>
        <router-link to="/foo">foo</router-link> <br/>
        <router-link to="/bar">bar</router-link>

        <transition :name="transition">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import Foo from '@/components/Foo';
import Bar from '@/components/Bar';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},
    ]
})
export default {
    name: 'Start',
    router,
    data(){
        return {
            transition: 'slide-top'
        }
    },
    watch: {
        $route(to){
            this.transition = to.path ==='/foo' ? 'slide-top': 'slide-down'
        }
    }
}
</script>

<style scoped>
.slide-top-enter{
    transform: translateY(50px);
}
.slide-top-enter-active{
    transition: all 1s;
}
.slide-down-enter{
    transform: scale(0);
}
.slide-down-enter-active{
    transition: all 1s;
}
</style>


