// 733. 图像渲染
// https://leetcode.cn/problems/flood-fill/
// function floodFill(image, sr, sc, newColor) {
//     const visited = {}
//     const initialColor = image[sr][sc]
//     function dfs(sr, sc) {
//         if (visited[sr + ',' + sc] || sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[sr].length - 1 || image[sr][sc] !== initialColor) return
//         image[sr][sc] = newColor
//         visited[sr + ',' + sc] = true
//         dfs(sr - 1, sc)
//         dfs(sr + 1, sc)
//         dfs(sr, sc - 1)
//         dfs(sr, sc + 1)
//     }
//     dfs(sr, sc)
//     return image
// };


function floodFill(image, sr, sc, newColor) {
    const initialColor = image[sr][sc]
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    function dfs(sr, sc) {
        if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[sr].length - 1 || image[sr][sc] !== initialColor) return
        image[sr][sc] = newColor
        // visited[sr + ',' + sc] = true 不需要了，只要newColor和initialColor不想等就可以
        for (let i = 0; i < 4; i++) {
            dfs(sr + dx[i], sc + dy[i])
        }
    }
    if (initialColor !== newColor) {
        dfs(sr, sc)
    }
    return image
};

// bfs写法
function floodFill2(image, sr, sc, newColor) {
    if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[sr].length - 1) return image;
    const currentColor = image[sr][sc]
    if (currentColor === newColor) return image;
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    const queue = [[sr, sc]]
    while (queue.length > 0) {
        const [x, y] = queue.pop()
        image[x][y] = newColor
        for (let i = 0; i < 4; i++) {
            const mx = x + dx[i], my = y + dy[i]
            if (mx >= 0 && mx < image.length && my >= 0 && my < image[mx].length && image[mx][my] === currentColor) {
                queue.push([mx, my])
            }
        }
    }
    return image
};

console.log(floodFill2([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))