<template>
    <div>
        {{count1}}, {{localData}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: 
        // mapState({
        //     // count1: state => state.count,
        //     // count1: 'count',
        //     count1(state){
        //         return state.count
        //     }
        // }),
        
        // mapState([
        //     'count1'
        // ]),

        {
            localData(){
                return this.count1
            },
            ...mapState({
                count1: 'count'
            })
        },

    methods: {
        increment(){
            this.$store.commit('increment')
        },
        decrement(){
            this.$store.commit('decrement')
        },
    }
}
</script>

