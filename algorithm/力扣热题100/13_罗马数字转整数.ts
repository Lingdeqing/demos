
function romanToInt(s: string): number {
    const valMaps = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ] as [number, string][];

    let res = 0
    for (let [val, str] of valMaps) {
        while (s.startsWith(str)) {
            s = s.slice(str.length)
            res += val
        }
    }
    return res
};