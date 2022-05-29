// https://www.nowcoder.com/practice/52d382c2a7164767bca2064c1c9d5361

const symbols = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
function complex(pwd) {
    let score = 0
    if (pwd.length <= 4) score += 5;
    else if (pwd.length <= 7) score += 10
    else score += 25

    let upper = 0, lower = 0, num = 0, sb = 0
    for (let ch of pwd) {
        if (ch >= 'a' && ch <= 'z') {
            lower++
        } else if (ch >= 'A' && ch <= 'Z') {
            upper++
        } else if (ch >= '0' && ch <= '9') {
            num++
        } else if (symbols.includes(ch)) {
            sb++
        }
    }
    if (upper + lower > 0 && upper * lower === 0) {
        score += 10
    } else if (upper > 0 && lower > 0) {
        score += 20
    }

    if (num === 1) {
        score += 10
    } else if (num > 0) {
        score += 20
    }

    if (sb === 1) {
        score += 10
    } else if (sb > 0) {
        score += 25
    }

    if (upper > 0 && lower > 0 && num > 0 && sb > 0) {
        score += 5
    } else if ((upper > 0 || lower > 0) && num > 0 && sb > 0) {
        score += 3
    } else if ((upper > 0 || lower > 0) && num > 0) {
        score += 2
    }

    if (score >= 90) {
        return 'VERY_SECURE'
    }
    if (score >= 80) {
        return 'SECURE'
    }
    if (score >= 70) {
        return 'VERY_STRONG'
    }
    if (score >= 60) {
        return 'STRONG'
    }
    if (score >= 50) {
        return 'AVERAGE'
    }
    if (score >= 25) {
        return 'WEAK'
    }
    if (score >= 0) {
        return 'VERY_WEAK'
    }
}