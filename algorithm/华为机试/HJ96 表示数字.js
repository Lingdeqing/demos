// https://www.nowcoder.com/practice/637062df51674de8ba464e792d1a0ac6


function markNum(str) {
    return str.replace(/(\d+)/g, '*$1*')
}