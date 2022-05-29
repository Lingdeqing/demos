// https://www.nowcoder.com/practice/f8538f9ae3f1484fb137789dec6eedb9

// 优化只遍历一班
function nearestPrime(even) {
    let res = [], min = Infinity
    for (let i = 2; i <= Math.floor(even / 2); i++) {
        if (isPrime(i) && isPrime(even - i)) {
            if (Math.abs(i - (even - i)) < min) {
                min = Math.abs(i - (even - i))
                res[0] = i
                res[1] = even - i
            }
        }
    }
    return res
}
function nearestPrime(even) {
    let res = [], min = Infinity
    for (let i = 2; i < even; i++) {
        if (isPrime(i) && isPrime(even - i)) {
            if (Math.abs(i - (even - i)) < min) {
                min = Math.abs(i - (even - i))
                res[0] = i
                res[1] = even - i
            }
        }
    }
    return res
}
// 想多了
// function nearestPrime(even) {
//     const primes = []
//     for (let i = 2; i < even; i++) {
//         if (isPrime(i)) {
//             primes.push(i)
//         }
//     }
//     let i = 0, j = primes.length - 1, res = [0, 10000]
//     while (i <= j) {
//         const sum = primes[i] + primes[j]
//         if (sum === even) {
//             if (res[1] - res[0] > j - i) {
//                 res[0] = i;
//                 res[1] = j;
//             }
//             i++;
//             j--;
//         } else if (sum > even) {
//             j--;
//         } else {
//             i++
//         }
//     }
//     return [primes[res[0]], primes[res[1]]]
// }
function isPrime(n) {
    if (n <= 2) return true
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(nearestPrime(4))