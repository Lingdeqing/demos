// https://www.nowcoder.com/practice/dd0c6b26c9e541f5b935047ff4156309

function lcm(a, b) {
    return a * b / gcd(a, b)
}

function gcd(a, b) {
    while (a !== b) {
        if (a < b) {
            ;[a, b] = [b, a];
        }
        a = a - b
    }
    return a
}

console.log(gcd(5, 7))