// https://www.nowcoder.com/practice/2baa6aba39214d6ea91a2e03dff3fbeb


function log(strs) {
    const res = [], map = new Map()
    strs.forEach(str => {
        const [filePath, line] = str.split(' ')
        const pathItems = filePath.split('\\')
        const fileName = pathItems[pathItems.length - 1].slice(-16) + ' ' + line
        if (!map.has(fileName)) {
            res.push(fileName)
        }
        map.set(fileName, (map.get(fileName) || 0) + 1)
    })
    return res.slice(-8).map(fileName => {
        return `${fileName} ${map.get(fileName)}`
    })
}