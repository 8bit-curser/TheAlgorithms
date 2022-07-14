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

// ---- Multiple Pointer Pattern -----
// 
// Useful when there is a need to find a sibling value in a string or sorted array
// for example it could be used in an array of numbers and we need to find a pair that
// its sum is 0.
// 
// Naive solution:

// Time complex = O(n**2) [Nested loops]
// Space complex = O(1)
function sumZero(arr) {
    for (let i=0; i< arr.length; i++) {
        for (let j=i+1; j< arr.length; j++){
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// a better approach
// Time complexity O(n) - []
// Space complexity O(1)
function sumZero(arr) {
    let left = 0; // one starts at the beggining 
    let right = arr.length - 1; // one starts from the end of the array
    while (left < right ) {  // this will run until we get to the middle of the array
        let sum = arr[left] + arr[right];  // we sum the two values
        if (sum == 0) { // if they are 0 we have a pair
            return [arr[left], arr[right]];
        } else if (sum > 0) { // if the sum is positive it means (as the array is sorted) the left number is smaller than the right (-2 + 3)
            right--; // so we push the pointer on the right to the left
        } else { // if the sum is negative it means the the number on the right is smaller than on the left (-4 + 2)
            left++; // so push the left pointer to the right
        }
    }
}
// countUniques([]) 0
// countUniques([-2,-1,0,1,1]) 4
// countUniques([1,1,1,1,1,1,2]) 2
// countUniques([1,2,3,4,5,6,6,6,6,7]) 7
// Timecomplexity O(n) [ we need to iterate once over the array]
// Space complex O(1)
// workes only on sorted arrays
function countUniques(arr) {
    if (arr.length === 0) return 0; // if empty arr return 0
    let pointer = 0; // first pointer starts at base
    for (let i = 1; i < arr.length; i++) { // i being the second one, starts at base +1
        if (arr[pointer] !== arr[i]) { // check equality
            pointer++; // if not equal increase the base pointer
            arr[pointer] = arr[i]; // put the different value into the new base pointer slot  
        } 
    }
    return pointer + 1; // pointer returns the last idx modified we need to add 1 to be consistent
}
// pointer
// 1, 1, 1, 2   => first iter pointer = 0; i=1
//    j 
//
// pointer
// 1, 1, 1, 2 => second iter pointer = 0 ; i=2
//       j 
// pointer
// 1, 1, 1, 2 => third iter pointer =0; i=3
//          j
// 
// We got a match then 
//    pointer
// 1, 2, 1, 2 => final result pointer =1; i=3 return pointer+1 = 2 (2 unique numbers)
//          j
// 
// 
// ---- Sliding Window Pattern -----
// 
// Creates a subset (window) which can increaese or decrease
// depending on a given criteria. Good for keeping track of a subset.
//
// - exercise. Given an unordered array and the size of a window
// find the window with the biggest sum
//
// maxSubarraySum([1,2,5,2,8,1,5], 2) 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) 17
// maxSubarraySum([4,2,1,6], 1) 6
// maxSubarraySum([4,2,1,6,2], 4) 13 
// maxSubarraySum([], 4) nul
// 
// for the first example.
// [1,2,5,2,8,1,5]
// iter 0 -> first subset 1,2 = 3
// iter 1 -> second subset 2,5 = 7
// iter 2 -> third subset  5,2 = 7
// iter 3 -> fourth subset 2,8 = 10
// iter 4 -> fifth subset  8,1 = 9
// iter 5 -> sixth subset 1,5 = 6
// 
// we itered length - 1
// 
// -- Naive solution --
// time complexity O(N**2) [nested loops]
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    // for negative values on the array
    var max = -Infinity;
    for (let i=0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) { 
            max = temp
        }
    }
    return max;
}
// 
// -- Improved solution
// Time Complexity O(n)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    // if arr is empty
    if (arr.length < num) return null;
    // initialize maxSum to the first chunk possible
    for (let i=0; i < num; i++){
        maxSum += arr[i];
    }
    // initialize tempSum
    tempSum = maxSum;
    // iterates from where the last iteration left
    for (let i = num; i < arr.length; i++) {
        // substracts the first number and adds the new one
        // if we have [1,2,3,4,5] and the window is of 2
        // first loop give us temp of 3 (1 + 2)
        // for the next iter we dont need to add 2+3
        // we just can do 3(temp sum) - 1 (arr[0]) + 3(arr[2]) = 5 
        // arr[0] the 0 is determined by doing 2 (i) - 2 (num)
        // for arr[1] the 1 is determined by doing 3(i) - 2 .. etc
        // and we can repeat this,  all the time iterating only once
        tempSum = tempSum - arr[i-num] + arr[i];
        // updates maxSum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// 
// 
// ----- Divide and Conquer Pattern -------
// 
// Divide data in smaller chunks and repeat the process
// with a subset of the data. Can decrease time complexity. 
// 
// 
// --- example
// given a sorted array of ints, write a function that takes a number
// and returns the idx where the value passed to the function is located    
// if not return -1
// 
// search([1,2,3,4,5,6], 4) 3
// search([1,2,3,4,5,6], 6) 5
// search([1,2,3,4,5,6], 11) -1
// 
// ---- naive solution [Linear Search]
// Time Complex O(n) 
function search(arr, val) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}
// 
// --- refactor [Binary Search]
// Time Complex O(log(n))
function search(arr, val) { // we basically reduce the amount of numbers we need to look for
    let min = 0; // start idx
    let max = arr.length - 1; // last idx
    while (min <= max) {
        let middle = Math.floor((min+max) / 2); // get mid idx
        // let currentElement = arr[middle];
        // as arr is supposed to be sorted we can use the
        // following logic
        if (arr[middle] < val) { // if the value in the middle is smaller than the value we are looking
            min = middle + 1;  // we discard that half and move the min to the middle idx + 1
        } else if (arr[middle] >  val) { // if the value in the middle is larger than the value we are looking
            max = middle - 1; // we discard the upper half moving the max to the middle - 1
        } else {
            return middle;
        }
    }
    return -1;
}
// 
// 
// 
// 
// 
// 
// 
// 
// 
