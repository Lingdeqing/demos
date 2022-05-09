/**
    题目：
    给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 */

// time: 
// space: 
function constructArr(a) {
    let b = new Array(a.length), prev = 1, post = 1;
    // 乘出前半部分
    for (let i = 1; i < a.length; i++) {
        b[i] = prev * a[i - 1]
        prev = b[i]
    }
    // 乘出后半部分
    for (let i = a.length - 2; i >= 0; i--) {
        if (i === 0) b[i] = 1;
        b[i] = b[i] * post * a[i + 1]
        post = post * a[i + 1]
    }
    return b
}