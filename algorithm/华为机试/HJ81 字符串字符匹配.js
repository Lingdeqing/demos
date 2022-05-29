// https://www.nowcoder.com/practice/22fdeb9610ef426f9505e3ab60164c93

function match(s1, s2) {
    // for (let ch of s1) {
    //     if (!s2.includes(ch)) {
    //         return false
    //     }
    // }
    // return true
    const set = new Set()
    for(let ch of s2){
        set.add(ch)
    }
    for(let ch of s1){
        if(!set.has(ch)){
            return false
        }
    }
    return true
}