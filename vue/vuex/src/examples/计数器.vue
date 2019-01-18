<template>
    <div>
        {{count}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    }, 
    mutations: {
        increment: state => state.count ++,
        decrement: state => state.count --,
    }
})
export default {
    computed: {
        count() {
            return store.state.count;
        }
    },
    methods: {
        increment(){
            store.commit('increment')
        },
        decrement(){
            store.commit('decrement')
        },
    }
}
</script>

