function solution(numbers) {
    console.log(numbers.toString());
    return backtrack(0, 0, 0, numbers);
}

function backtrack(total, sum, start, numbers) {
    if (start >= numbers.length) {
        if (sum % 2 == 0) {
            console.log(sum);
            return total + 1;
        }
        return total;
    }
    let n = numbers[start];
    while (n != 0) {
        let cur = n % 10;
        // console.log(cur);
        total = backtrack(total, sum + cur, start + 1, numbers);
        n = Math.floor(n / 10);
    }
    return total;
}

// 测试用例
console.log(solution([123, 456, 789]) === 14);
// console.log(solution([123456789]) === 4);
// console.log(solution([14329, 7568]) === 10);
