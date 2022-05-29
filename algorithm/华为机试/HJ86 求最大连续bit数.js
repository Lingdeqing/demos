// https://www.nowcoder.com/practice/4b1658fd8ffb4217bc3b7e85a38cfaf2

// 按位与错开法：https://blog.nowcoder.net/n/cd77268bc5704fdcb533bdf1198e67ea?f=comment
function oneBitNum(n) {
    return Math.max(...n.toString(2).split(/0+/g).map(item => item.length))
}