<template>
    <div>
       <Counter />
    </div>
</template>

<script>

import Vuex from 'vuex'
import Vue from 'vue'
import Counter from '@/components/counter';
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
    store,
    components: {
        Counter
    }
}
</script>

