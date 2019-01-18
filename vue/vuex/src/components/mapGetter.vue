<template>
    <div>
        {{doneTodos}}<br>
        {{doneTodosCount}}<br>
        {{todo}}<br>
        <input type="text" v-model="id" /><br>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

    data(){
        return {
            id: '',
        }
    },

    computed: {
        ...mapGetters([
            'doneTodos',
            'doneTodosCount'
        ]),
        todo(){
            return this.$store.getters.getTodoById(this.id);
        }
    },

}
</script>

