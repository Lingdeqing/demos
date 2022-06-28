// 374. 猜数字大小
// https://leetcode.cn/problems/guess-number-higher-or-lower/

function guessNumber(n) {
    let low = 1, high = n;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)
        if (guess(mid) === 1) {
            low = mid + 1
        } else if (guess(mid) === -1) {
            high = mid - 1
        } else {
            return mid
        }
    }
}
function guess(pick) {
    const num = 6;
    if (pick < num) return -1;
    if (pick > num) return 1;
    return 0
}