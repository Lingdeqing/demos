// https://www.nowcoder.com/practice/3350d379a5d44054b219de7af6708894

function vote(candidates, tickets) {
    const res = candidates.reduce((ret, name) => {
        ret[name] = 0;
        return ret
    }, {
        Invalid: 0,
    })
    tickets.forEach(t => {
        if (t in res) {
            res[t]++
        } else {
            res.Invalid++
        }
    })
    return res
}