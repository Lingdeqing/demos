// https://www.nowcoder.com/practice/2f6f9339d151410583459847ecc98446

// 别忘了把输入字符串转为数字类型

function drop(h) {
    return [
        h + 2 * h * 0.5 * (1 - 0.5 ** 4) / (1 - 0.5),// h+2*h*(1/2+1/(2**2)+...+1/(2**(n-1))),
        h / (2 ** 5)// h/(2**n)
    ]
}

drop(1)