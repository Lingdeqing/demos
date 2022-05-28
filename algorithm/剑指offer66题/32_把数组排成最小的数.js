/**
    题目：
        输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */

// time: 
// space: 
function minNumber(arr) {
    function quickSort(arr, left, right) {
        if (left >= right) return
        let i = left, j = right;
        while (i < j) {
            while (i < j && compare2(arr[j], arr[left])) j--;
            while (i < j && compare(arr[i], arr[left])) i++;
            ;[arr[i], arr[j]] = [arr[j], arr[i]];
        }
        ;[arr[left], arr[i]] = [arr[i], arr[left]];
        quickSort(arr, left, i - 1);
        quickSort(arr, i + 1, right);
    }
    quickSort(arr, 0, arr.length - 1);
    return arr.join('')
}
function compare(a, b) {
    return +(a.toString() + b.toString()) <= +(b.toString() + a.toString())
}
function compare2(a, b) {
    return +(a.toString() + b.toString()) >= +(b.toString() + a.toString())
}