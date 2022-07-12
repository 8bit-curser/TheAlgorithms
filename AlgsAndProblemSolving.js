// Alg definition:
//
//  Set of steps to accomplish a task


// 
// === "Fool proof" steps to problem solving: ===
// 
// 1. Understand the problem
// 2. Explore concrete examples
// 3. Break it down
// 4. Solve it/ Simplify
// 5. Look back and refactor
// 
// ===============================================
// 
// 
// 2. imagine examples with their inputs and outputs
// make them more complicated with empty and invalid inputs
// 
// 3. write down the steps to solve the problem
// 
// 4. find the most difficult part, temporarily ignore it, write a simplified solution
// then incoroporate the difficult part 
//
// 5. self explainatory, but when it works, reflect on it and try to improve the individual components
// analyze it, find what you dont like and improve it. Ask what can be done better, more readable
// nicer, more performant, etc. 
// 
// 
// 
// 
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
