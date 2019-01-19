<template>
    <div>
        <div v-if="loading">loading...</div>
        <div v-if="error">{{error}}</div>
        <div v-if="!loading && data">{{data}}</div>
    </div>
</template>

<script>
const list = [
    'post 1 data',
    'post 2 data',
    'post 3 data',
]
export default {
    props: {
        id: {
            type: String,
            default: '1'
        }
    },
    data(){
        return {
            loading: true,
            error: '',
            data: null
        }
    },
    created(){
        this.getData();
    },
    watch: {
        $route(to){
            this.getData();
        }
    },
    methods: {
        getData(){
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.data = list[this.id];
            }, 2000)
        }
    }
}
</script>
