/**
    题目：
        LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何。为了方便起见,你可以认为大小王是0。
 */

// time: 
// space:
// 大佬写法
// max - min < 5才能构成顺子
// 顺子条件：max-min<5&&无重复
// Set法
function isStraight(nums) {
    const set = new Set();
    let max = 0, min = 100
    for (let n of nums) {
        if (n === 0) continue; // 跳过王

        if (set.has(n)) return false // 有重复的
        set.add(n);

        max = Math.max(max, n)
        min = Math.min(min, n)
    }
    return max - min < 5
}

// 排序遍历
function isStraight(nums) {
    nums.sort((a, b) => a - b) // 排好牌
    for (let i = 0; i < 5; i++) {
        if (nums[i] === 0) continue; // 跳过王

        if (i > 0 && nums[i] === nums[i - 1]) return false; // 重复

        if (nums[4] - nums[i] >= 5) return false
    }
    return true
}

// 暴力写法
function isStraight(nums) {
    nums.sort((a, b) => a - b) // 排好牌
    let king = 0, prev = -1
    for (let i = 0; i < 5; i++) {
        if (nums[i] === 0) {
            king++
        } else {
            if (king === 4) { // 4个王
                return true
            }
            if (prev === -1) {
                prev = nums[i]
            } else {
                const slot = nums[i] - prev - 1 // 空位
                if (slot === -1) { // 重复牌
                    return false
                } if (slot > king) { // 空位超过王的数量
                    return false
                } else {
                    king -= slot // 填充王
                }
                prev = nums[i]
            }
        }
    }
    return true
}