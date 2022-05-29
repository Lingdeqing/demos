// https://www.nowcoder.com/practice/5af18ba2eb45443aa91a11e848aa6723


function sortStr(strs) {
    function quickSort(arr, left, right) {
        if (left >= right) return;

        let i = left, j = right;
        while (i < j) {
            while (i < j && arr[j] >= arr[left]) j--;
            while (i < j && arr[i] <= arr[left]) i++;
            ;[arr[i], arr[j]] = [arr[j], arr[i]];
        }
        ;[arr[i], arr[left]] = [arr[left], arr[i]];

        quickSort(arr, left, i - 1)
        quickSort(arr, i + 1, right)
    }
    quickSort(strs, 0, strs.length - 1)
    return strs
}