function same(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false
    } 
    for (let i = 0; i < arr1.length; i++) {
        let searchIndex = arr2.indexOf(arr1[i] ** 2)
        if (searchIndex === -1) {
            return false
        }
        arr2.splice(searchIndex, 1)
    }
    return true
}

let start = performance.now()
console.log(same([1, 2, 3, 2, 1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,1, 2, 3, 2,], [4, 1, 9, 4, 4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,4, 1, 9, 4,]))
let end = performance.now()
console.log(end - start)
