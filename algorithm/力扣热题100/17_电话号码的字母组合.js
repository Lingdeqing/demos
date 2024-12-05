/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: 'abc'.split(''),
        3: 'def'.split(''),
        4: 'ghi'.split(''),
        5: 'jkl'.split(''),
        6: 'mno'.split(''),
        7: 'pqrs'.split(''),
        8: 'tuv'.split(''),
        9: 'wxyz'.split(''),
    }

    const res = []
    const path = []
    function bt(start) {
        if (start >= digits.length) {
            if (path.length > 0) {
                res.push(path.join(''))
            }
            return
        }

        const letters = map[digits[start]];
        for (let j = 0; j < letters.length; j++) {
            path.push(letters[j])
            bt(start + 1)
            path.pop()
        }
    }
    bt(0)
    return res;
};