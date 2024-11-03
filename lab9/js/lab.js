/*
    lab.js - Lab 9: Libraries & jQuery
    Requirements: jQuery must be loaded for this script to work.
    Authors: Keith Tran & Josh Chow
    Date: 11/2/24
*/

// Use jQuery to select the element by its ID and set the HTML content
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>")
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>")
// add a click listener to the challenge button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add button to Reflection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>")
// add a click listener to the challenge button
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});

// add button to problems section
$("#results").append("<button id='button-results'>Make Special</button>")
// add a click listener to the challenge button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});

