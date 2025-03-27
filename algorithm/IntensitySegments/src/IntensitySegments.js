export class IntensitySegments {
    // Stores the intensity changes at specific points
    _segments = new Map()
    // Array to store ordered keys for efficient lookup
    _orderedKeys = []

    // Adds an amount to the intensity between from and to points
    add(from, to, amount) {
        this._validateParams(from, to, amount);

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