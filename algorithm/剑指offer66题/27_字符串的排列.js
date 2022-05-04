/**
    题目：
        输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */
// time:
// space:
// dfs对位置进行递归
function permutation(s) {
    const permutations = [];
    const c = s.split('') // 转换成数组
    function dfs(index) {
        if (index === s.length - 1) {
            // 最后一个位置，没得选择了
            permutations.push(c.join(''))
            return
        }
        const set = new Set()
        // 从当前位置到最后选一个字符放到当前位置
        for (let i = index; i < c.length; i++) {
            if (set.has(c[i])) continue; // 去除同一个位置重复字符
            set.add(c[i]);
            ;[c[index], c[i]] = [c[i], c[index]];
            // 递归处理下一个位置
            dfs(index + 1);
            // 保证回到for循环c顺序一直是进for循环时的模样
            ;[c[index], c[i]] = [c[i], c[index]];
        }
    }
    dfs(0)
    return permutations
}

// 野路子
function permutation(s) {
    if (s.length === 0) return []
    if (s.length === 1) return [s]
    const permutations = []
    for (let i = 0; i < s.length; i++) {
        const subPermutations = permutation(s.slice(0, i) + s.slice(i + 1))
        for (let p of subPermutations) {
            permutations.push(s[i] + p)
        }
    }
    return [...new Set(permutations)]
}