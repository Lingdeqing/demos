<template>
    <div>
        {{count}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button><br>
        {{count2}}
        <button @click="increment2">+</button>
        <button @click="decrement2">-</button>
    </div>
</template>

<script>

import Vuex from 'vuex'
import {mapState, mapMutations} from 'vuex';
import Vue from 'vue'
Vue.use(Vuex);

const module1 = {
    namespaced: true,
    state: {
        count: 0,
    }, 
    mutations: {
        increment: state => state.count ++,
        decrement: state => state.count --,
    }
}

const module2 = {
    state: {
        count: 0,
    }, 
    mutations: {
        increment: state => state.count ++,
        decrement: state => state.count --,
    }
}
const store = new Vuex.Store({
    modules: {
        module1,
        module2
    }
})
export default {
    store,
    computed: {
        ...mapState({
            count: state => state.module1.count,
            count2: state => state.module2.count,
        }),
        // count() {
        //     return store.state.module1.count;
        // },
        // count2(){
        //     return store.state.module2.count;
        // }
    },
    methods: {
        
        // increment(){
        //     store.commit('module1/increment')
        // },
        // decrement(){
        //     store.commit('module1/decrement')
        // },
        // increment2(){
        //     store.commit('increment')
        // },
        // decrement2(){
        //     store.commit('decrement')
        // },
        ...mapMutations('module1', [
            'increment',
            'decrement',
        ]),
        ...mapMutations({
            'increment2': 'increment',
            'decrement2': 'decrement',
        }),
    }
}
</script>

