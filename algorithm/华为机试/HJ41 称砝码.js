// https://www.nowcoder.com/practice/f9a4c19050fc477e9e27eb75f3bfd49c

// 想复杂了，
// 下面这个测试用例会超时，考虑下有时回溯可能直接暴力复杂度会低些
// weighing('2000 1999 1998 1997 1996 1995 1994 1993 1992 1991'.split(' ').map(item => +item),
//     '10 10 10 10 10 10 10 10 10 10'.split(' ').map(item => +item))
// function weighing(mArr, xArr) {
//     let res = new Map()
//     // sum: 当前重量，index: 当前可以选择的砝码索引
//     function backtrack(sum, index) {
//         if (index === mArr.length) {
//             return
//         }

//         // i:还可以放的砝码数量
//         const restNum = xArr[index] // 当前砝码剩余数量
//         for (let i = 0; i < restNum + 1; i++) {
//             if (res.has(mArr[index] * i)) {
//                 continue
//             }
//             sum += mArr[index] * i;
//             xArr[index] -= i;
//             res.set(sum, [index, restNum])
//             backtrack(sum, index + 1)
//             sum -= mArr[index] * i;
//             xArr[index] += i;
//         }
//     }

//     backtrack(0, 0);
//     return res.size
// }


function weighing(mArr, xArr) {
    const set = new Set()
    set.add(0)
    for (let i = 0; i < mArr.length; i++) {
        for (let j = 0; j < xArr[i]; j++) {
            let size = set.size, k = 0;
            for (let key of set) {
                if (k === size) break;
                k++
                set.add(key + mArr[i])
            }
        }
    }
    return set.size
}

console.log(weighing([10, 9, 8, 7, 6, 5, 4, 3],
    [10, 10, 10, 10, 10, 10, 10, 10]))

