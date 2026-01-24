
function generateParenthesis(n: number): string[] {
    const res = [] as string[]
    function bt(start: number, str: string, score: number) {
        if (score < 0 || score > n) return
        if (start === n * 2) {
            if (score === 0) {
                res.push(str)
            }
            return
        }

        bt(start + 1, str + '(', score + 1)
        bt(start + 1, str + ')', score - 1)
    }
    bt(0, '', 0)
    return res
};