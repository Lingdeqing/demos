// https://www.nowcoder.com/practice/6abde6ffcc354ea1a8333836bd6876b8


function stat(nums) {
    const res = [0, '0.0']
    let sum = 0, k = 0
    for (let i of nums) {
        if (i < 0) {
            res[0]++
        } else if (i > 0) {
            sum += i;
            k++
        }
    }
    if (k > 0) {
        res[1] = (sum / k).toFixed(1)
    }
    return res
}