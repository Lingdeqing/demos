<template>
    <div>
        {{count}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="add({n:10})">add</button>
        <button @click="asyncIncrement">async increment</button>
        <button @click="asyncAdd">async add</button>
        <button @click="asyncCompose({n: 5})">async compose</button>
    </div>
</template>

<script>

import Vuex from 'vuex'
import { mapMutations, mapActions } from 'vuex'
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
    },
    actions: {
        incrementAsync(context){
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        },
        addAsync(context, payload){
            setTimeout(() => {
                context.commit('add', payload)
            }, 1000)
        },
        async asyncCompose(context, payload){
            await context.dispatch('incrementAsync')
            context.dispatch('addAsync', payload)
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
        ...mapMutations([
            'increment',
            'decrement',
        ]),
        ...mapMutations({
            'add': 'add',
        }),
        asyncIncrement(){
            this.$store.dispatch('incrementAsync')
        },
        asyncAdd(){
            this.$store.dispatch({
                type: 'addAsync',
                n: 10
            })
        },

        ...mapActions([
            'asyncCompose'
        ])

    }
}
</script>

