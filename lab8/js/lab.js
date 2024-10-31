// lab.js - Lab 8: Anon Functions and Callbacks
// Author: Keith Tran & Josh Chow
// Date: 10/30/24

array = [1,10,2300203,20,420,21,23,27];

function addTwoNums (x) {
    var results = x + x;
    return results;
}

// test function
console.log("What is 10 + 10? ", addTwoNums(10));
console.log("What is 420 + 420? ", addTwoNums(420));
console.log("What is 21 + 21? ", addTwoNums(21));

console.log("My array", array);

var result = array.map(addTwoNums);
console.log("Double every element in the array: ", result);

var mapResults = array.map(function(x) {
    return x * x;
})

console.log("Square of array: ", mapResults);

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);