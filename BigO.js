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