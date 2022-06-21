// 547. 省份数量
// https://leetcode.cn/problems/number-of-provinces/

// dfs
function findCircleNum(isConnected) {
    let visited = {}, res = 0
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            dfs(i)
            res++
        }
    }
    function dfs(i) {
        if (visited[i]) return
        visited[i] = true;
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1) {
                dfs(j)
            }
        }
    }
    return res
}

// 并查集:https://labuladong.github.io/algo/2/20/50/
class UF {
    constructor(n) {
        this.parent = Array.from({ length: n }, (v, k) => k)
        this._count = n
    }
    union(i, j) {
        const rootI = this.find(i)
        const rootJ = this.find(j)
        if (rootI === rootJ) return
        this.parent[rootI] = rootJ
        this._count--
    }
    connected(i, j) {
        return this.parent(i) === this.i(j)
    }
    find(x) {
        if (x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }
    count() {
        return this._count
    }
}

function findCircleNum2(isConnected) {
    let uf = new UF(isConnected.length)
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = i + 1; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j)
            }
        }
    }
    return uf.count()
}
console.log(findCircleNum2([[1, 1, 1], [1, 1, 1], [1, 1, 1]]))