// 1311. 获取你好友已观看的视频
// https://leetcode.cn/problems/get-watched-videos-by-your-friends/




var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    // let lastFriends = friends[id], visited = { [id]: true }
    // while (level > 1) {
    //     let nextFriends = []
    //     lastFriends.forEach(i => {
    //         friends[i].forEach(j => {
    //             if (visited[j]) return
    //             visited[j] = true
    //             nextFriends.push(j)
    //         })
    //     })
    //     lastFriends = nextFriends
    //     level--
    // }

    // bfs
    const queue = [id], visited = { [id]: true }
    while (level) {
        let size = queue.length;
        while (size) {
            const id = queue.shift()
            friends[id].forEach(id => {
                if (visited[id]) return
                visited[id] = true
                queue.push(id)
            })
            size--
        }
        level--
    }


    // 统计数量
    const map = new Map()
    queue.forEach(i => {
        watchedVideos[i].forEach(v => {
            map.set(v, (map.get(v) || 0) + 1)
        })
    })

    // 排序
    return [...map.entries()].sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0] > b[0] ? 1 : -1
        }
        return a[1] - b[1]
    }).map(item => item[0])
};

console.log(watchedVideosByFriends([["A", "B"], ["C"], ["B", "C"], ["D"]],
    [[1, 2], [0, 3], [0, 3], [1, 2]],
    1,
    2))