<template>
    <div>
       <Counter />
    </div>
</template>

<script>

import Vuex from 'vuex'
import Vue from 'vue'
import Counter from '@/components/mapGetter';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            {id: 1, text: '123123123', done: true},
            {id: 2, text: '123123123', done: false},
        ]
    }, 
    getters: {
        doneTodos(state){
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount(state, getters){
            return getters.doneTodos.length;
        },
        getTodoById(state){
            return (id) => {
                return state.todos.find(todo => {
                    return todo.id == id
                });
            }
        }
    }
})
export default {
    store,
    components: {
        Counter
    }
}
</script>

