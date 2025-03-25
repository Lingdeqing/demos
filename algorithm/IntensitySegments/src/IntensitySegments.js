export class IntensitySegments {
    // Stores the intensity changes at specific points
    _segments = new Map()

    // Adds an amount to the intensity between from and to points
    add(from, to, amount) {
        this._addAmountAtKey(from, amount)
        this._addAmountAtKey(to, -amount)
    }

    // Sets the intensity between from and to points to a specific amount
    set(from, to, amount) {
        const keys = this._orderedKeys();
        let leftAmount = 0, rightAmount = 0

        // Calculate the total intensity before 'from' and up to 'to'
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] < from) {
                leftAmount += this._segments.get(keys[i])
            }

            if (keys[i] <= to) {
                rightAmount += this._segments.get(keys[i])
            }

            // Remove any existing segments between from and to
            if (keys[i] > from && keys[i] < to) {
                this._segments.delete(keys[i])
            }

            // End the loop prematurely
            if (keys[i] > to) break;
        }
        // Set new intensity values at the boundaries
        this._segments.set(from, amount - leftAmount)
        this._segments.set(to, rightAmount - amount)
    }

    // Converts the segments to a string representation
    toString() {
        const res = [];
        let amountSum = 0;
        const keys = this._orderedKeys();
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
    _addAmountAtKey(key, amount) {
        const oldAmount = this._segments.has(key) ? this._segments.get(key) : 0;
        this._segments.set(key, oldAmount + amount)
    }

    // Returns the keys in sorted order
    _orderedKeys() {
        return Array.from(this._segments.keys()).sort((a, b) => a - b)
    }
}