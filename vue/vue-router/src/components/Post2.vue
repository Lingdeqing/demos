<template>
    <div>
        <div v-if="error">{{error}}</div>
        <div v-if="data">{{data}}</div>
    </div>
</template>

<script>
const list = [
    'post 1 data',
    'post 2 data',
    'post 3 data',
]

function getData(id, done){
            setTimeout(() => {
                done(null, list[id]);
            }, 500)
        }
export default {
    props: {
        id: {
            type: String,
            default: '1'
        }
    },
    beforeRouteEnter(to, from, next){
        getData(to.params.id, (error, data)=>{
            next((vm) => {
                vm.setData(error, data);
            })
        });
    },
    beforeRouteUpdate(to, from, next){
        getData(to.params.id, (error, data)=>{
           this.setData(error, data);
            next();
        });
    },
    data(){
        return {
            error: '',
            data: null
        }
    },
    methods: {
        setData(error, data){
            this.error = error;
            this.data = data;
        }
    }
}
</script>
