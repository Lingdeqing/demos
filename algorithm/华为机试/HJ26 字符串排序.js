// https://www.nowcoder.com/practice/5190a1db6f4f4ddb92fd9c365c944584


// 总共26个字母，按字母顺序遍历字符串即可，顺序就自动排好了
// 参考：https://blog.nowcoder.net/n/8a1bedc96d57484c8795dd5f3de3ae4b?f=comment
function sort(s) {
    // 收集字母
    const letters = []
    // O(26n)
    const codeOf = ch => ch.charCodeAt(0)
    const aCode = codeOf('a'), ACode = codeOf('A')
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < s.length; j++) {
            const code = codeOf(s[j].toLowerCase())
            if (code - aCode === i || code - ACode === i) {
                letters.push(s[j])
            }
        }
    }

    // 组装回去
    let res = '', k = 0
    for (let ch of s) {
        if (isLetter(ch)) {
            res += letters[k++]
        } else {
            res += ch
        }
    }
    return res
}


function sort(s) {
    // 收集字母
    const letters = []
    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            letters.push(s[i])
        }
    }
    // 排序
    // 不知道为啥牛客网的sort函数不稳定
    // letters.sort((a, b)=>a.toLowerCase().charCodeAt(0)-b.toLowerCase().charCodeAt(0))
    bubbleSort(letters, (a, b) => a.toLowerCase().charCodeAt(0) > b.toLowerCase().charCodeAt(0))

    // 组装回去
    let res = '', k = 0
    for (let ch of s) {
        if (isLetter(ch)) {
            res += letters[k++]
        } else {
            res += ch
        }
    }
    return res
}
function isLetter(ch) {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')
}

function bubbleSort(arr, compare) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

console.log(sort('A Famous Saying: Much Ado About Nothing (2012/8).'))
