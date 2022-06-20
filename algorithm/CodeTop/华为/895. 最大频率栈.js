// 895. 最大频率栈
// https://leetcode.cn/problems/maximum-frequency-stack/

class FreqStack {
    freq = []
    count = new Map()
    push(val) {
        const c = (this.count.get(val) || 0) + 1
        this.count.set(val, c)
        if (this.freq.length > 0) {
            let i = this.freq.length - 1;
            while (i >= 0 && this.freq[i][1] > c) i--; // 这边效率低下哦
            this.freq.splice(i + 1, 0, [val, c]); // 这边效率低下哦
        } else {
            this.freq.push([val, c])
        }
    }
    pop() {
        if (this.freq.length === 0) return
        const [val] = this.freq.pop()
        this.count.set(val, this.count.get(val) - 1)
        return val
    }
}


// 让你实现栈，没有一定要用栈去实现栈
// 还可以考虑优先级队列来实现，按照频率和插入顺序排序，频率越大、插入次序越后则越靠近堆顶
class FreqStack2 {
    maxFreq = 0;
    freqToVals = new Map()
    valToFreq = new Map()
    push(val) {
        const freq = (this.valToFreq.get(val) || 0) + 1
        this.valToFreq.set(val, freq)
        if (!this.freqToVals.has(freq)) {
            this.freqToVals.set(freq, [])
        }
        this.freqToVals.get(freq).push(val)
        if (freq > this.maxFreq) {
            this.maxFreq = freq;
        }
    }
    pop() {
        if (this.maxFreq === 0) return
        const vals = this.freqToVals.get(this.maxFreq)
        const val = vals.pop()
        this.valToFreq.set(val, this.maxFreq - 1)
        if (vals.length === 0) {
            this.maxFreq--
        }
        return val
    }
}

freqStack = new FreqStack2();
freqStack.push(5);//堆栈为 [5]
freqStack.push(7);//堆栈是 [5,7]
freqStack.push(5);//堆栈是 [5,7,5]
freqStack.push(7);//堆栈是 [5,7,5,7]
freqStack.push(4);//堆栈是 [5,7,5,7,4]
freqStack.push(5);//堆栈是 [5,7,5,7,4,5]
console.log(freqStack.pop());//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
console.log(freqStack.pop());//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
console.log(freqStack.pop());//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
console.log(freqStack.pop());//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
