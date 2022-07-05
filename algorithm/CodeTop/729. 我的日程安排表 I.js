// 729. 我的日程安排表 I
// https://leetcode.cn/problems/my-calendar-i/

var MyCalendar = function () {
    this.ranges = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    if (this.ranges.length === 0) {
        this.ranges.push([start, end])
        return true
    }
    for (let i = 0; i < this.ranges.length; i++) {
        const range = this.ranges[i]
        if ((start < range[1] && range[0] < end)) {
            return false
        }
    }
    this.ranges.push([start, end])
    return true
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

//  ["MyCalendar","book","book","book","book","book","book","book","book","book","book"]
//  [[],[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]
const a = new MyCalendar()
const data = [[47, 50], [33, 41], [39, 45], [33, 42], [25, 32], [26, 35], [19, 25], [3, 8], [8, 13], [18, 27]]
data.forEach((item, index) => {
    a.book(...item)
})