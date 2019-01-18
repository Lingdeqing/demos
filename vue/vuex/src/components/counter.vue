<template>
    <div>
        {{count}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
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

