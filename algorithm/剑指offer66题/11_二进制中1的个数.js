/**
    题目：
        输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */
function count1(n){
    // -1 => '-1' 没有转换成补码
    // return n.toString(2).split('0').length
    let counter = 0;
    for(let i = 0; i < 32; i++){
        // console.log(n.toString(2))
        if(n&1===1){
            counter++
        }
        n = n>>>1;
    }
    return counter
}
