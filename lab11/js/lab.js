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

function sortUserNameAllowSpaces(userName) {
    return userName.split(" ") .map(word => word.split("").sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join("")).join(" "); 
}

function shuffleUserNameAnagram(userName) {
    let lowerCaseName = userName.toLowerCase(); 
    let shuffledName = sortUserNameAllowSpaces(lowerCaseName); 
    let words = shuffledName.split(' '); 

    let capitalizedAnagram = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');

    return capitalizedAnagram;
}

// Click listener for button
$("#submit").click(function(){
    const userName = $("#user-name").val(); 
    const userNameSorted = sortString(userName);
    
    // Append a new paragraph with the sorted name to the results container
    $("#results").append('<p class="text"><span>Here is your sorted name: </span><span>' + userNameSorted + '</span></p>');
});

// Click listener for generating an anagram
$("#submit_2").click(function(){
    const userName = $("#user-name_2").val(); 
    const userNameAnagram = shuffleUserNameAnagram(userName);

    // Append a new paragraph with the anagram to the results container
    $("#results").append('<p class="text"><span>Here is your name anagram: </span><span>' + userNameAnagram + '</span></p>');
});

// Click listener for favorite color input
$("#submit_color").click(function(){
    const favoriteColor = $("#favorite-color").val();

    // Append a new paragraph with the favorite color to the results container
    $("#results").append('<p class="text"><span>Your favorite color is: </span><span>' + favoriteColor + '</span></p>');
});

// Click listener for hobby input
$("#submit_hobby").click(function(){
    const hobby = $("#hobby").val();

    // Append a new paragraph with the hobby to the results container
    $("#results").append('<p class="text"><span>Your favorite hobby is: </span><span>' + hobby + '</span></p>');
});

// Click listener for animal input
$("#submit_animal").click(function(){
    const animal = $("#animal").val();

    // Append a new paragraph with the hobby to the results container
    $("#results").append('<p class="text"><span>Your favorite animal is: </span><span>' + animal + '</span></p>');
});

// Click listener for class input
$("#submit_class").click(function(){
    const favClass = $("#class").val();

    // Append a new paragraph with the hobby to the results container
    $("#results").append('<p class="text"><span>Your favorite class is: </span><span>' + favClass + '</span></p>');
});

// Click listener for food input
$("#submit_food").click(function(){
    const food = $("#food").val();

    // Append a new paragraph with the hobby to the results container
    $("#results").append('<p class="text"><span>Your favorite food is: </span><span>' + food + '</span></p>');
});

// Glitch effect: Randomly change text colors and sizes briefly
$("#glitchButton").click(function() {
    setInterval(function() {
        $("body").addClass("glitch");
        setTimeout(function() {
            $("body").removeClass("glitch");
        }, 5000); 
    }, 3000); 
});

// Rotate screen
$("#rotate").click(function() {
    setInterval(function() {
        $("body").addClass("rotate");
        setTimeout(function() {
            $("body").removeClass("rotate");
        }, 5000); 
    }, 3000); 
});

// Shake Screen
$("#shake").click(function() {
    setInterval(function() {
        $("body").addClass("shake");
        setTimeout(function() {
            $("body").removeClass("shake");
        }, 5000); 
    }, 3000); 
});

// Fade effect
$("#fade").click(function() {
    setInterval(function() {
        $("body").addClass("fade");
        setTimeout(function() {
            $("body").removeClass("fade");
        }, 5000); 
    }, 3000); 
});


