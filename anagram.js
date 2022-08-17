function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if (str1.length != str2.length) {
        return false
    }
    let freqStr1 = {}
    let freqStr2 = {}
    for(var char of str1) {
        freqStr1[char] = (freqStr1[char] || 0) + 1
    }
    for(char of str2) {
        freqStr2[char] = (freqStr2[char] || 0) + 1
    }
    for(var key in freqStr1) {
        if (!(key in freqStr1)) {
            return false
        }
        if (freqStr1[key] != freqStr2[key]){
            return false
        }
    }
    return true
  }

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true