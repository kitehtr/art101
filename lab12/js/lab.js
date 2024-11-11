/*
    lab.js - Lab 12: Conditionals
    Requirements: Working with your partner, create a function that depends on conditionals.
    Authors: Keith Tran & Josh Chow
    Date: 11/11/24
*/

function sortingHat(str) {
    length = str.length;
    mod = length % 4;
    if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1){
        return "Ravenclaw";
    }
    else if (mod == 2){
        return "Slytherin";
    }
    else if (mod == 3){
        return "Hufflepuff";
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p class='indent'>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})

