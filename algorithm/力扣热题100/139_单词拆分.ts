var wordBreak = (s: string, wordDict: string[]) : boolean => {
    let memo = new Map<number, boolean>()
    function dp(start: number):boolean{
        if(start >= s.length) return true
        if(memo.has(start)) return memo.get(start)!
        for(let word of wordDict){
            if(s.startsWith(word, start) && dp(start + word.length)){
                memo.set(start, true)
                return true
            }
        }
        memo.set(start, false)
        return false
    }
    return dp(0)
};

wordBreak('leetcode', ["leet", "code"])