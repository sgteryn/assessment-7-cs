const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);

let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
//Next, edit the code in runtime.js to obtain timing results for calling the two functions with all of the differently sized arrays– tinyArray, smallArray, mediumArray, largeArray, and extraLargeArray
// //largeArray
// perf.start();
// doublerAppend(largeArray);
// resultsInsert;

// perf.start();
// doublerInsert(largeArray);
// resultsInsert;

// console.log('Results for the largeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);


// //mediumArray

// perf.start();
// doublerAppend(mediumArray);
// resultsInsert;

// perf.start();
// doublerInsert(mediumArray);
// resultsInsert;

// console.log('Results for the mediumArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);


// //smallArray
// perf.start();
// doublerAppend(smallArray);
// resultsInsert;

// perf.start();
// doublerInsert(smallArray);
// resultsInsert;

// console.log('Results for the smallArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);


// //tinyArray
// perf.start();
// doublerAppend(tinyArray);
// resultsInsert;

// perf.start();
// doublerInsert(tinyArray);
// resultsInsert;

// console.log('Results for the tinyArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);
