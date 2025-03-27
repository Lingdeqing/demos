

class IntensitySegments {
    // Stores the intensity changes at specific points
    _segments = new Map()
    // Array to store ordered keys for efficient lookup
    _orderedKeys = []

    // Adds an amount to the intensity between from and to points
    add(from, to, amount) {
        this._validateParams(from, to, amount);
        if (amount === 0) return

        // Ensure from is less than to
        [from, to] = this._normalizeParams(from, to)
        if (from === to) return

        this._addKeyAmount(from, amount)
        this._addKeyAmount(to, -amount)
    }

    // Sets the intensity between from and to points to a specific amount
    set(from, to, amount) {
        this._validateParams(from, to, amount);

        [from, to] = this._normalizeParams(from, to)
        if (from === to) return

        const keys = this._orderedKeys;
        let leftAmount = 0, rightAmount = 0
        let fromIndex = 0, toIndex = 0

        // Calculate the total intensity before 'from' and up to 'to'
        for (let i = 0; i < keys.length; i++) {
            // End the loop prematurely
            if (keys[i] > to) break;

            if (keys[i] < from) {
                fromIndex = i + 1
                leftAmount += this._segments.get(keys[i])
            }

            if (keys[i] <= to) {
                toIndex = i + 1
                rightAmount += this._segments.get(keys[i])
            }

            // Remove any existing segments between from and to
            if (keys[i] > from && keys[i] < to) {
                this._segments.delete(keys[i])
                this._orderedKeys.splice(i--, 1)
                toIndex--
            }
        }
        // Set new intensity values at the boundaries
        if (!this._segments.has(from)) {
            this._orderedKeys.splice(fromIndex, 0, from)
            toIndex++
        }
        this._segments.set(from, amount - leftAmount)
        if (!this._segments.has(to)) {
            this._orderedKeys.splice(toIndex, 0, to)
        }
        this._segments.set(to, rightAmount - amount)
    }

    // Converts the segments to a string representation
    toString() {
        const res = [];
        let amountSum = 0;
        const keys = this._orderedKeys;
        let i = 0
        // Build the intensity profile by accumulating changes
        while (i < keys.length) {
            const amount = this._segments.get(keys[i])
            // Only include points where there's an actual intensity change
            if (amount !== 0) {
                amountSum += amount
                res.push([keys[i], amountSum])
            }
            i++
        }
        return JSON.stringify(res)
    }

    // Helper method to add amount at a specific key
    _addKeyAmount(key, amount) {
        // If key doesn't exist, insert it into ordered array
        if (!this._segments.has(key)) {
            const index = this._getKeyIndex(key)
            this._orderedKeys.splice(index, 0, key)
        }
        const oldAmount = this._segments.has(key) ? this._segments.get(key) : 0;
        this._segments.set(key, oldAmount + amount)
    }

    // Binary search to find insertion index for key
    _getKeyIndex(key) {
        let i = 0, j = this._orderedKeys.length - 1, mid = 0
        while (i <= j) {
            mid = i + ((j - i) >> 1)
            if (this._orderedKeys[mid] < key) {
                i = mid + 1
            } else if (this._orderedKeys[mid] > key) {
                j = mid - 1
            } else if (this._orderedKeys[mid] === key) {
                // Never reach here as key doesn't exist
            }
        }
        return i
    }

    // Validate parameter types
    _validateParams(from, to, amount) {
        if (!Number.isInteger(amount)) throw new Error('Param "amount" should be integer')
        if (typeof from !== 'number') throw new Error('Param "from" should be number');
        if (typeof to !== 'number') throw new Error('Param "to" should be number');
    }
    // Ensure from is less than to
    _normalizeParams(from, to) {
        return from > to ? [to, from] : [from, to]
    }
}

class SimpleIntensitySegments {
    _segments = [[-Infinity, 0], [Infinity, 0]]

    // Adds an amount to the intensity between from and to points
    add(from, to, amount) {
        this._validateParams(from, to, amount);
        if (amount === 0) return

        // Ensure from is less than to
        [from, to] = this._normalizeParams(from, to)
        if (from === to) return

        // '[[10,1],[20,2],[30,1],[40,0]]'
        let leftIndex = 0, rightIndex = 0
        while (leftIndex < this._segments.length && this._segments[leftIndex][0] < from) leftIndex++
        while (rightIndex < this._segments.length && this._segments[rightIndex][0] < to) rightIndex++

        const leftAmount = this._segments[leftIndex - 1][1] || 0
        const rightAmount = this._segments[rightIndex - 1][1] || 0

        if (this._segments[leftIndex][0] === from) {
            this._segments[leftIndex][1] += amount
            leftIndex += 1
        } else {
            this._segments.splice(leftIndex, 0, [from, leftAmount + amount])
            rightIndex += 1
            leftIndex += 1
        }
        if (this._segments[rightIndex][0] === to) {
            rightIndex -= 1
        } else {
            this._segments.splice(rightIndex, 0, [to, rightAmount])
            rightIndex -= 1
        }
        for (let i = leftIndex; i <= rightIndex; i++) {
            this._segments[i][1] += amount
        }
        this._merge()
    }

    // Sets the intensity between from and to points to a specific amount
    set(from, to, amount) {
        this._validateParams(from, to, amount);

        // Ensure from is less than to
        [from, to] = this._normalizeParams(from, to)
        if (from === to) return

        // '[[10,1],[20,2],[30,1],[40,0]]'
        let leftIndex = 0, rightIndex = 0
        while (leftIndex < this._segments.length && this._segments[leftIndex][0] < from) leftIndex++
        while (rightIndex < this._segments.length && this._segments[rightIndex][0] < to) rightIndex++

        const rightAmount = this._segments[rightIndex - 1][1]

        // leftIndex修改为amount 或者leftIndex插入amount
        if (this._segments[leftIndex][0] === from) {
            this._segments[leftIndex][1] = amount
            leftIndex += 1
        } else {
            this._segments.splice(leftIndex, 0, [from, amount])
            rightIndex += 1
            leftIndex += 1
        }
        // rightIndex不修改 或者rightIndex 插入 rightIndex-1 amount
        if (this._segments[rightIndex][0] === to) {
            rightIndex -= 1
        } else {
            this._segments.splice(rightIndex, 0, [to, rightAmount])
            rightIndex -= 1
        }

        // [leftIndex, rightIndex] 删除
        this._segments.splice(leftIndex, rightIndex - leftIndex + 1)
        this._merge()
    }

    toString() {
        return JSON.stringify(this._segments.slice(1, -1))
    }

    _merge() {
        for (let i = 1; i < this._segments.length - 1; i++) {
            if (this._segments[i][1] === this._segments[i - 1][1]) {
                this._segments.splice(i--, 1)
            }
        }
    }

    // Validate parameter types
    _validateParams(from, to, amount) {
        if (!Number.isInteger(amount)) throw new Error('Param "amount" should be integer')
        if (typeof from !== 'number') throw new Error('Param "from" should be number');
        if (typeof to !== 'number') throw new Error('Param "to" should be number');
    }
    // Ensure from is less than to
    _normalizeParams(from, to) {
        return from > to ? [to, from] : [from, to]
    }
}


// const segments = new SimpleIntensitySegments();
// console.log(segments.toString())//.toEqual('[]');
// segments.set(10, 30, 1);
// console.log(segments.toString())//.toEqual('[[10,1],[30,0]]');
// segments.set(20, 30, 2);
// segments.set(30, 40, 1);
// console.log(segments.toString())//.toEqual('[[10,1],[20,2],[30,1],[40,0]]');
// segments.set(10, 20, -1);
// segments.set(20, 30, 0);
// segments.set(30, 40, -1);
// console.log(segments.toString())//.toEqual('[[10,-1],[20,0],[30,-1],[40,0]]');
// console.log(segments.toString())//.toEqual('[]');
// segments.add(10, 30, 1);
// console.log(segments.toString())//.toEqual('[[10,1],[30,0]]');
// segments.add(20, 40, 1);
// console.log(segments.toString())//.toEqual('[[10,1],[20,2],[30,1],[40,0]]');
// segments.add(10, 40, -1);
// console.log(segments.toString())//.toEqual("[[20,1],[30,0]]");
// segments.add(10, 40, -1);
// console.log(segments.toString())//.toEqual('[[10,-1],[20,0],[30,-1],[40,0]]');


function test() {
    const seg1 = new IntensitySegments()
    const seg2 = new SimpleIntensitySegments()
    let loop = 10000

    while (loop--) {
        const from = Math.floor(Math.random() * 10)
        const to = Math.floor(Math.random() * 10)
        const amount = Math.floor(Math.random() * 4 - 2)
        const op = Math.random() > 0.5 ? 'add' : 'set'
        console.log('%s:\t%s,\t%s,\t%s', op, from, to, amount,)
        seg1[op](from, to, amount)
        seg2[op](from, to, amount)
        if (seg1.toString() !== seg2.toString()) {
            console.log(seg1, '\n', seg1.toString())
            console.log(seg2, '\n', seg2.toString())
            process.exit(-1)
            break
        }
    }
}
for (let i = 0; i < 10000; i++) {
    test()
}


// const seg1 = new IntensitySegments()
// const seg2 = new SimpleIntensitySegments()
// seg1.set(5, 2, 1)
// seg1.set(1, 4, 6)
// console.log(seg1.toString())
// seg2.set(5, 2, 1)
// seg2.set(1, 4, 6)
// console.log(seg2.toString())