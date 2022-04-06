function dispatch(componentName, event, params){
    let parent = this.$parent;
    while(parent){
        if(parent.$options.name === componentName){
            parent.$emit(event, params);
            return;
        }
        parent = parent.$parent;
    }
}
function broadcast(vm, componentName, event, params){
    vm.$children.forEach(child => {
        if(child.$options.name === componentName){
            child.$emit(event, params)
        } else {
            broadcast(child, componentName, event, params)
        }
    })
}
export default {
    methods: {
        dispatch,
        broadcast(componentName, event, params){
            broadcast(this, componentName, event, params)
        }
    }
}