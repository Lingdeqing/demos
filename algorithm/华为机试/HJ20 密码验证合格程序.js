// https://www.nowcoder.com/practice/184edec193864f0985ad2684fbc86841

function isValid(pwd) {
    if (pwd.length <= 8) return false;

    let hasNum = 0, hasLower = 0, hasUpper = 0, hasOther = 0
    for (let ch of pwd) {
        if (ch === ' ' || ch === '\n') {
            return false
        }
        if (ch >= 'a' && ch <= 'z') hasLower = 1;
        else if (ch >= 'A' && ch <= 'Z') hasUpper = 1;
        else if (ch >= '0' && ch <= '9') hasNum = 1;
        else hasOther = 1;
    }
    if (hasLower + hasUpper + hasNum + hasOther < 3) return false

    for (let i = 0; i <= pwd.length - 6; i++) {
        if (pwd.lastIndexOf(pwd.slice(i, i + 3)) >= i + 3) {
            return false
        }
    }
    return true
}

console.log(isValid('021ABC9000'))
