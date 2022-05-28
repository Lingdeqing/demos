// https://www.nowcoder.com/practice/64f6f222499c4c94b338e588592b6a62

function stat(nums) {
    let numOfNeg = 0, sum = 0, k = 0;
    nums.forEach(num => {

        if (num < 0) {
            numOfNeg++
        } else {
            sum += num;
            k++
        }
    })
    return [numOfNeg, k > 0 ? sum / k : 0]
}
console.log(stat([-13, -4, -7]))