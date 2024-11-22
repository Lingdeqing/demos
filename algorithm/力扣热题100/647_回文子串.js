var countSubstrings = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        const a = palindrome(s, i, i)
        res += (a + 1) / 2
        if (i < s.length - 1) {
            const b = palindrome(s, i, i + 1)
            res += b / 2
        }
    }

    function palindrome(s, i, j) {
        while (i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
        }
        return j - i - 1;
    }
    return res
};