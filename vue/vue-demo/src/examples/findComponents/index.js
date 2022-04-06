export function findComponentUpward(vm, componentName) {
    let parent = vm.$parent
    while (parent) {
        if (parent.$options.name === componentName) {
            return parent
        }
        parent = parent.$parent
    }
    return null
}

export function findComponentsDownward(vm, componentName) {
    return vm.$children.reduce((found, child) => {
        if(child.$options.name === componentName){
            found.push(child)
        } else {
            found = found.concat(findComponentsDownward(child, componentName))
        }
        return found
    }, [])
}