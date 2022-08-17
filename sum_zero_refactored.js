function sumZero(arr) {
    var left = 0
    var right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == 0) {
            return [arr[left], arr[right]]
        }
        if (sum > 0) {
            right--
        }
        else {
            left++
        }
    }
}

console.log(sumZero([-1, 0, 1]))