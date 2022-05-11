/**
    题目：
    如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值
 */

// time: 
// space:
import PriorityQueue from "../lib/PriorityQueue"
// 大顶堆+小顶堆实现
class MedianFinder {
    small = new PriorityQueue((a, b) => a > b)
    large = new PriorityQueue()
    addNum(num) {
        if (this.small.size() >= this.large.size()) {
            this.small.add(num)
            this.large.add(this.small.poll())
        } else {
            this.large.add(num)
            this.small.add(this.large.poll())
        }
    }
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.peek()
        } else if (this.small.size() < this.large.size()) {
            return this.large.peek()
        }
        return (this.small.peek() + this.large.peek()) / 2
    }
}
