/**
 * 最大公约数
 */
export default function gcd(a, b) {
    if (a < b) {
        ;[a, b] = [b, a];
    }
    return b === 0 ? a : gcd(b, a % b)
}

// 辗转相减法
function gcd(a, b) {
    if (a < b) {
        ;[a, b] = [b, a];
    }
    return a === b ? a : gcd(a - b, b);
}
// 最好用迭代吧，递归容易栈溢出
function getGcd(a, b) {
    while (a !== b) {
        if (a < b) {
            ;[a, b] = [b, a];
        }
        a = a - b;
    }
    return a
}

// 最小公倍数
function lcm(a, b) {
    return a * b / gcd(a, b)
}