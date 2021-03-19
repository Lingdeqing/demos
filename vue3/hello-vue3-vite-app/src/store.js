import {createStore} from 'vuex/dist/vuex.esm-browser'


const store = createStore({
    state: {
        globalCount: 1
    },
    mutations: {
        increment(state) {
            // 变更状态
            state.globalCount++
        }
    }
})

export default store