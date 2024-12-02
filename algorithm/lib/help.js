function list(arr) {
    let x = { next: null }, p = x
    for (let i = 0; i < arr.length; i++) {
        p.next = {
            val: arr[i],
            next: null
        }
        p = p.next
    }
    return x.next
}