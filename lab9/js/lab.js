/*
    lab.js - Lab 9: Libraries & jQuery
    Requirements: jQuery must be loaded for this script to work.
    Authors: Keith Tran & Josh Chow
    Date: 11/2/24
*/

// Add a button to each section with the class "special-section"
$(".special-section").append("<button class='button-special'>Make Special</button>");
// Attach a click listener to each button that toggles the "special" class on its parent section
$(".button-special").click(function() {
    $(this).parent().toggleClass("special");
});