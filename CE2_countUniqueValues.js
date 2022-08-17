function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let count = 0
    if (arr.length == 0) {
        return 0
    } else {
        count++
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] != arr[i+1]) {
                count++
            }
        }
    }
    return count
  }

  console.log(countUniqueValues([1,1,1,1,1,2]))