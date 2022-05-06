// ====== Common patterns ======
//
//
// ~ Frequency Counter
//
// used to compared to collections (strings, arrays) and make some
// comparisson between them, its better than using nested loops O(n**2) against
// usually O(n).
//
// for e.g a f(x) that takes 2 arrays compares them and returns true if every element
// in the first array hast a corresponding squared value in the second one.
//  f([1,2,3], [1,4,9]) => true
//  f([1,2,3], [1,9]) => false
//  f([1,2,1], [4, 4, 1]) => false (must be same frequency) it should be [4,1,1] to match the frequency
// 
// = naive implementation O(n**2)
// 
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i=0; i<arr1.length; i++) { // O(n)
        let correctIdx = arr2.indexOf(arr[1] ** 2) // O(n)
        if (correctIdx === -1) {
            return false;
        }
        arr2.splice(correctIdx, 1)
    }
    return true;
}
// 
// =  Refactores O(n)

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1  = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {  // O(n)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
    }
    for (let val of arr2) {  // O(n)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
    }
    for (let key in frequencyCounter1) {  // O(n)
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
        return true
    }
}

// O(3n) which is actually O(n)
// 
// = anagrams
// 
// problem: Given two strings check if the second string is an anagram of the second string
// examples:
//  - an('', '') true
//  - an('aaz', 'zza') false
//  - an('anagram', 'nagaram') true
//  - an('rat', 'car') false
// breakdown:
//  1. compare lenghts of strings if differ false
//  2. create an object with the amount of ocurrences of each letter for both strings
//  3. compare key to key between both objects and their value must match if not return false early
// solve:
function an(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    let frequencyCounter1  = {}
    let frequencyCounter2 = {}
    for (let char of string1) {  // O(n)
        frequencyCounter1[char] = (frequencyCounter1[char] || 0 ) + 1
    }
    for (let char of string2) {  // O(n)
        frequencyCounter2[char] = (frequencyCounter2[char] || 0 ) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {  // O(n)
        if(!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true

}

// 
// 
// 
// 
// 
// 
