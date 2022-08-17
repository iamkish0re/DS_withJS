function same(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false
    } 
    freqArr1 = {}
    freqArr2 = {}
    for(let val of arr1) {
        freqArr1[val] = (freqArr1[val] || 0 ) + 1
    }

    for(let val of arr2) {
        freqArr2[val] = (freqArr2[val] || 0 ) + 1
    }
    for(let key in freqArr1) {
        if (!(key ** 2 in freqArr2)) {
            return false
        }
        if (freqArr1[key] != freqArr2[key ** 2]) {
            return false
        }
    }
    return true
}
let start = performance.now()
console.log(same([1, 2, 3, 2], [4, 1, 9, 4]))
let end = performance.now()
console.log(end - start)