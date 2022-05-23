// https://www.nowcoder.com/practice/cf24906056f4488c9ddb132f317e03bc

function maze(arr) {
    let path = []
    if (arr.length === 0 || arr[0].length === 0) return path;
    const m = arr.length, n = arr[0].length;
    const used = new Set()
    function dfs(path, i, j) {
        if (used.has((i + ',' + j))) return false;
        if (i < 0 || i >= m || j < 0 || j >= n || arr[i][j] === 1) return false

        path.push([i, j])
        if (i === m - 1 && j === n - 1) {
            return true;
        }

        used.add(i + ',' + j)
        if (dfs(path, i + 1, j)) {
            return true
        }
        if (dfs(path, i - 1, j)) {
            return true
        }
        if (dfs(path, i, j + 1)) {
            return true
        }
        if (dfs(path, i, j - 1)) {
            return true
        }
        path.pop()
        used.delete(i + ',' + j)

        return false
    }
    dfs(path, 0, 0)
    return path
}

console.log(maze(`0 1 0 0 0
0 1 1 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 1 0`.split('\n').map(line => line.split(' ').map(item => +item))))