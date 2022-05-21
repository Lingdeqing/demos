// https://www.nowcoder.com/practice/02cb8d3597cf416d9f6ae1b9ddc4fde3

function mostBeauty(word) {
    const map = new Map()
    for (let ch of word) {
        const key = ch.toLowerCase()
        map.set(key, (map.get(key) || 0) + 1)
    }
    const counts = [...map.values()].sort((a, b) => a - b)
    let res = 0;
    for (let i = counts.length - 1, a = 26; i >= 0; i--) {
        res += counts[i] * a;
        a--;
    }
    return res;
}

console.log(mostBeauty('vzsefzriolraueazkoseqcivkdpwnlnxyzpdbondojxesxlmwmkdtwspxweqqhwtghqljfcordkfpcmhiriftvwapftictpeiilrvdxsovazrgxebwjplvkaidmynqlnzytucijbhqpfwooevtqpiclvdrvnxemjzmqctiupufjgkkdwdvgnpiuqvtjartgmwvqeihtbqwefyhxyrrxdroleranrbpbpfeafpsrtiwazs'))
