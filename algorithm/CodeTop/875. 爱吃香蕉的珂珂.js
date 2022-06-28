// 875. 爱吃香蕉的珂珂
// https://leetcode.cn/problems/koko-eating-bananas/

function minEatingSpeed(piles, h) {
    function getHours(k) {
        let res = 0;
        for (let i = 0; i < piles.length; i++) {
            if (piles[i] <= k) {
                res++;
            } else {
                res += Math.ceil(piles[i] / k)
            }
        }
        return res
    }

    let low = 1, high = Math.max(...piles), middle;
    while (low <= high) {
        middle = low + Math.floor((high - low) / 2)
        const hours = getHours(middle)
        if (hours > h) {
            low = middle + 1;
        } else if (hours < h) {
            high = middle - 1;
        } else {
            high = middle - 1;
        }
    }
    return high + 1
}