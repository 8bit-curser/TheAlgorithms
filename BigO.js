// || Time complexity ||

function addUpTo(n) {
    let total = 0; // 1 assignment
    // 1 assignment, n comparisons, n additions and assingment (i++)
    for (let i = 1; i <= n; i++){
        // n assignments and n additions
        total += i;
    }
    return total;
}

function addUpToV2(n) {
    return n * (n + 1 ) / 2;
}

t1 = Date.now();
console.log(addUpTo(10000000));
t2 = Date.now();
console.log("Took: ", t2-t1, " miliseconds");
t1 = Date.now();
console.log(addUpToV2(10000000));
t2 = Date.now();
console.log("Took: ", t2-t1, " miliseconds");

// first count the operations V2 has 3 ops sum; multiply and finally divide
// while v1 has 5 n operations + 2 defined 

// we wanna keep the number of operations as constant as possible V2 is constantly 3 ops
// while addUpTo is n operations
// v2 = O(1) O(of whatever x amount of operations is always = 1)
// addUpTo = O(n)


function countUpAndDown(n) {
    console.log('Going up!');
    for (let i=0; i < n; i++){
        console.log(i);
    } // this for loop is O(n)
    console.log('At the top! Andd.... down we go!');
    for (let j=n; j >= 0; j--) {
        console.log(j);
    } // this is also O(n)
    console.log('Back down!');
}

// the whole function then is O(2n) or O(n)


function printAllPairs(n) {
    for (let i = 0; i<n; i++) { // this is O(n)
        for (let j = 0; j < n; j++) {
            console.log(i, j) // and this is also O(n)
        }
    }
    // but for every iteration of n we run the inner loop
    // which is also O(n), giving us O(n * n) = O (n**2)
}


// ||||| Quick Shorthands ||||||
// 1. Arithmetics are constant time
// 2. variable assingment also constant time
// 3. accessing elements in array/hash map also constant time.
// 4. Loops, its complexity is the length of the loop
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// this one is O(n), n can get bigger and bigger and will keep printing
// the iteration will grow in size
function logAtLeast5(n) {
    for (let i=1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// this one is O(1), n even if it gets to 1000 it will iterate up to 5
// and stop so it will at most iterate 5 times, being at the end constant time.
function logAtMost5(n) {
    for (let i=1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}


// From better to worst
// O(1) > O(log n) > O(n) > O(n log n) > O(n**2)

// || Space complexity ||
//
// auxiliary space complexity: space taken by algorithm without considering inputs
// <<<< Rules of Thumb >>>>>
// ~ mostttt Primitves take constant space
// ~ strings demand O(n) space where n is the length
// ~ refrence objects [arrays, hash maps] take also O(n) being n their length
//
//

// arr could be O(N) depending on its size
// but with auxiliary is O(1) without auxiliary is O(n)
function sum(arr) {
    let total = 0; // O(1)
    for (let i = 0; i< arr.length; i++){
        total += arr[i]; // O(1) being x assignments but same stuff
    }
    return total;
}

// but

function double(arr) {
    let newArr = []; // assignment
    for(let i=0; i < arr.length; i++) {
        newArr.push(2 * arr[i]); // n assignments dending on arr size
    }
    return newArr;
}
// auxialiry (taking arr into consideration would be O(n)) 
// arr= O(n) New arr = O(n) arr+newarr = O(2n) = O(n)
// no auxiliary is also O(n) as it only considers new arr



/// |||| LOGS ||||
//
// The logarithm of a number roughly measures the number of
// times you can divide that number by 2 before you get a value
// thats less than or equal to one log(8) = 8 /2 = 4 4/2 = 2 2/2 = 1; 3 times!


// Why is it relevant?
// search algorithms have log time complex
// efficient sorting algorithms involve logarithms
// recursion sometimes involve both space log complexity


// ||||| Objects ||||||
//
// access, insertion and removal on objects its O(1) while search is O(n)
// if ordering is not needed then its a great option
// searching refers to determin if a piece of data is on the value side of the
// key pair relation eg. numbers: [1, 2, 3] searching that 3 is in numbers



// |||| Arrays |||||
//
// They are ordered, if you dont need order maybe there are other structures
// such as linked lists that can provide more performance than arrays.
// insertion and removal is costy, accessing is O(1) cause you do it by idx,
// searching O(n). Pushing into an array is O(1), you add it to the back so its easy
// but adding at the start of the array its costy as we have to update all idxs for
// all the elements so inserting at the head of the array is O(n) the same happens
// if we remove for the top of the array. 
// the methods in js for arrays if its not push and pop O(1) and sort which is O(n*log n)
// then all of the others depend in the size which means O(n) [slice, splice, shift, unshift, concat, foreach, map, filter ..]