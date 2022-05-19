// 49. 字母异位词分组

function groupAnagrams(strs) {
    const map = new Map()
    strs.forEach(str => {
        const key = encode(str)
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str)
    })
    // function encode(str) {
    //     return str.split('').sort().join('')
    // }
    const aCode = 'a'.charCodeAt(0)
    function encode(str) {
        const nums = new Array(26).fill(0)
        for (let ch of str) {
            const i = ch.charCodeAt(0) - aCode
            nums[i] = (nums[i] || 0) + 1
        }
        return nums.join(',')
    }
    return [...map.values()]
}
