/*
        有N个正整数组成的一个序列
        给定一个整数sum
        求长度最长的的连续子序列使他们的和等于sum
        返回次子序列的长度
        如果没有满足要求的序列 返回-1
        案例1：
        输入
        1,2,3,4,2
        6
        输出
        3
        解析：1,2,3和4,2两个序列均能满足要求
        所以最长的连续序列为1,2,3 因此结果为3

        示例2：
        输入
        1,2,3,4,2
        20
        输出
        -1
        解释：没有满足要求的子序列，返回-1

        备注： 输入序列仅由数字和英文逗号构成
        数字之间采用英文逗号分割
        序列长度   1<=N<=200
        输入序列不考虑异常情况
        由题目保证输入序列满足要求
         */
function solution(nums, target) {
    let i = 0, j = 0, sum = 0, ans = -1
    while (j < nums.length) {
        sum += nums[j]
        j++
        while (sum > target) {
            sum -= nums[i]
            i++
        }
        if (sum === target) {
            ans = Math.max(ans, j - i)
        }
    }
    return ans
}

console.log(solution([1, 2, 3, 4, 2], 20))