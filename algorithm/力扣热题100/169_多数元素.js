var majorityElement = function (nums) {
    let res = 0
    let vote = 0;
    for (let i = 0; i < nums.length; i++) {
        if (vote === 0) {
            res = nums[i]
        }
        if (nums[i] === res) {
            vote++;
        } else {
            vote--;
        }
    }
    return res
};