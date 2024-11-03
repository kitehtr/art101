/*
    lab.js - Lab 11: JavaScript Events and Forms
    Requirements: Working with your partner, experiment with JS events.
    Authors: Keith Tran & Josh Chow
    Date: 11/3/24
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function(){
    // Get value of input field
    const userName = $("#user-name").val(); 
    
    // Sort it
    const userNameSorted = sortString(userName);

    // Append a new div to our output div with the sorted name
    $("#output").html('<div class="text"><span>Here is your new name: </span><span>' + userNameSorted + '</span></div>');

});
