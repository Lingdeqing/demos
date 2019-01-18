<template>
    <div>
        {{count}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="add({n:10})">add</button>
    </div>
</template>

<script>

import Vuex from 'vuex'
import { mapMutations } from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    }, 
    mutations: {
        increment: state => state.count ++,
        decrement: state => state.count --,
        add(state, payload){
            state.count += payload.n;
        }
    }
})
export default {
    store,
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        // increment(){
        //     store.commit('increment')
        // },
        // decrement(){
        //     store.commit('decrement')
        // },
        // add(payload){
        //     store.commit('add', payload)
        // }


        // ...mapMutations([
        //     'increment',
        //     'decrement',
        //     'add',
        // ])

        ...mapMutations([
            'increment',
            'decrement',
        ]),
        ...mapMutations({
            'add': 'add',
        })
    }
}
</script>

