/**
    题目：
        小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
 */

// time: 
// space:
// 滑动窗口
function findContinuousSequence(target) {
    let i = 1, j = 2, window = i + j, res = []
    while (i < j && i < target && j < target) {
        if (window > target) {
            window -= i
            i++
        } else if (window < target) {
            j++;
            window += j
        } else {
            // 构建结果
            const temp = new Array(j - i + 1).fill(0)
            temp.forEach((v, index) => temp[index] = index + i)
            res.push(temp)

            window = window - i + (j + 1);
            i++;
            j++;
        }
    }
    return res
}

// 数学公式
function findContinuousSequence(target) {
    const res = []
    for (let i = 1; i < target; i++) {
        const a = 1, b = 1, c = -i * i + i - 2 * target
        const delta = b ** b - 4 * a * c;
        if (delta < 0) {
            continue
        }
        const j = (-b + delta ** 0.5) / (2 * a)
        if (j < target && Number.isInteger(j)) {
            let temp = []
            for (let k = i; k <= j; k++) {
                temp.push(k)
            }
            res.push(temp)
        }
    }
    return res;
}

// 暴力
function findContinuousSequence(target) {
    const res = []
    for (let i = 1; i < target; i++) {
        let sum = i, temp = [i]
        for (let j = i + 1; j < target; j++) {
            sum += j
            temp.push(j)
            if (sum === target) {
                res.push(temp)
                break
            } else if (sum > target) {
                break
            }
        }
    }
    return res;
}