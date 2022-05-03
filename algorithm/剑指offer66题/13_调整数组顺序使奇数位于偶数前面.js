/**
    题目：
        输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
// time: O(nlogn)
// space: O(1)
// 稳定
function sort(arr) {
    arr.sort((a, b) => {
        if ((a & 1) === 1) {
            if ((b & 1) === 1) {
                return 0
            }
            // a奇数
            return -1
        } else {
            if ((b & 1) === 1) {
                // b奇数
                return 1
            }
            return 0
        }
    })
    return arr;
}

// time: O(n)
// space: O(n/2)
// 稳定
function sort(arr) {
    const evens = []
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] & 1) === 0) {
            // 偶数
            evens.push(arr[i])
            arr.splice(i--, 1)
        }
    }
    for (let n of evens) {
        arr.push(n)
    }
    return arr;
}


// time: O(n)
// space: O(1)
// 不稳定
function sort(arr) {
    let slow = 0, fast = 0;
    while (fast < arr.length) {
        if ((arr[fast] & 1) === 1) {
            // 奇数
            [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
            slow++;
        }
        fast++
    }
    return arr;
}

