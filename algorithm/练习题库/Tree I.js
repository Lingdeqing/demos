// Tree I
// https://www.nowcoder.com/practice/0c3d5848d27e449c8fe231a91c60fa5d?tpId=196&&tqId=37591&rp=1&ru=/ta/job-code-total&qru=/ta/job-code-total/question-ranking


function tree1(a) {
    const left = (i) => (i + 1) * 2 - 1
    const right = (i) => (i + 1) * 2
    let res = 0
    function dfs(i) {
        if (i >= a.length) return
        if (left(i) < a.length) {
            res += a[i] ^ a[left(i)]
            dfs(left(i))
        }
        if (right(i) < a.length) {
            res += a[i] ^ a[right(i)]
            dfs(right(i))
        }
    }
    dfs(0)
    return res
}

console.log(tree1(["aab", "bac", "ccd"]))