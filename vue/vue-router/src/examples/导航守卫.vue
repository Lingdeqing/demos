<template>
    <div>
        <router-link to="/user/1">user1</router-link> <br/>
        <router-link to="/user/2">user2</router-link> <br/>
        <router-link to="/user/3">user3</router-link> <br/>
        <router-link to="/user/4/post/1">user4-post1</router-link> <br/>
        <router-link to="/user/4/post/2">user4-post2</router-link> <br/>
        <router-link to="/error">error</router-link> <br/>
        <router-link to="/foo/1">/foo/1</router-link> <br/>
        <router-link to="/foo/2">/foo/2</router-link> <br/>
        <router-link to="/foo/3">/foo/3</router-link> <br/>

        <router-view></router-view>
        <h2>第一次或者由其他路由进入新的路由钩子顺序</h2>
        <p>
            beforeEach<br>
            beforeEnter<br>
            beforeRouteEnter<br>
            beforeResolve<br>
            afterEach<br>
            beforeCreate<br>
        </p>

        
        <h2>同一个路由参数更新钩子顺序</h2>
        <p>
            beforeEach<br>
            beforeRouteUpdate<br>
            beforeResolve<br>
            afterEach<br>
            updated<br>
        </p>

        <h2>切换为其他路由时</h2>
        <p>
            beforeRouteLeave<br>
            beforeEach<br>
            ...
            afterEach<br>
            beforeDestroy<br>
        </p>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '@/components/User';
;
import NotFound from '@/components/404';
import Foo from '@/components/Foo2';

Vue.use(VueRouter);

/* eslint-disable */

const router = new VueRouter({
    routes: [
        {path: '/404/*', component: NotFound},
        {path: '/user/:id', component: User, 
            beforeEnter(to, from, next){
                console.log('beforeEnter User');
                next();
            }
        },
        {path: '/user/:id/post/:postId', component: () => import('@/components/UserPost'),
            beforeEnter(to, from, next){
                console.log('beforeEnter');
                next();
            }
        },
        {path: '/foo/:id', component: Foo, props: true},
    ]
})

router.beforeEach(function(to, from, next){
    console.log('beforeEach');
    // next();
    // next(false);
    if(to.path == '/'){
        next(`/user/1/post/2`)
    } else if(to.path == '/error'){
        next(new Error('出错了'))
    } else {
        next();
    }
})

router.beforeResolve(function(to, from, next){
    console.log('beforeResolve');
    next();
})

router.afterEach(function(to, from){
    console.log('afterEach')
})

router.onError(function(error){
    console.log('onError')
    router.replace('/404/'+error.toString())
})
/* eslint-enable */
export default {
    name: 'Start',
    router
}
</script>

