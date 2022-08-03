// 单词消消乐
// https://www.nowcoder.com/practice/abb14fd6e1a34b0fb8016dfd7a99dfc5?tpId=196&&tqId=37249&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking

function WordsMerge(Words) {
    let res = ''
    while (Words.length > 0) {
        const word = Words.shift()
        if (word.length > 0 && res[res.length - 1] === word[0]) {
            Words.unshift(word.slice(1))
            res = res.slice(0, -1)
        } else {
            res += word
        }
    }
    return res
}

console.log(WordsMerge(["aab", "bac", "ccd"]))