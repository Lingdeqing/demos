// https://www.nowcoder.com/practice/ca6ac6ef9538419abf6f883f7d6f6ee5

function execCmd(input) {
    const map = {
        'reset': 'reset what',
        'reset board': 'board fault',
        'board add': 'where to add',
        'board delete': 'no board at all',
        'reboot backplane': 'impossible',
        'backplane abort': 'install first'
    }
    const cmds = Object.keys(map).map(str => str.split(' '));
    const MATCH_FAILED = 'unknown command'
    return input.map(str => {
        if (!str) return MATCH_FAILED
        const inputItems = str.split(' ')
        const matches = cmds.filter(cmdItems => {
            return cmdItems.length === inputItems.length && cmdItems.every((cmdItem, i) => cmdItem.startsWith(inputItems[i]))
        })
        return matches.length === 1 ? map[matches[0].join(' ')] : MATCH_FAILED
    })
}
