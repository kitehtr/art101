// lab.js - Lab 7: Functions
// Author: Keith Tran & Josh Chow
// Date: 10/28/24

//Task X: Bonus 5
var userName = window.prompt("Please enter your name");

// Functions to sort usernames
function sortUserName(userName) {
    return userName.toLowerCase().split("").sort().join("");
}

// Task X: Bonus 1: sort lower case and Uppercase
function sortUserNamePreserveCase(userName) {
    return userName.split("").sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join("");
}

//Task X: Bonus 2: Ignore spaces
function sortUserNameAllowSpaces(userName) {
    return userName.split(" ") .map(word => word.split("").sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join("")).join(" "); 
}


//Task X: Bonus 3: shuffle the user's name to create an Anagram with Capitalization
function shuffleUserNameAnagram(userName) {
    let lowerCaseName = userName.toLowerCase(); 
    let shuffledName = sortUserNameAllowSpaces(lowerCaseName); 
    let words = shuffledName.split(' '); 

    let capitalizedAnagram = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');

    return capitalizedAnagram;
}

//Task X: Bonus 4: Style with css 
function displayAnagramBadge(userName) {
    if (!userName) return; 
    let capitalizedAnagram = shuffleUserNameAnagram(userName);
    const existingBadge = document.getElementById("badge");
    if (existingBadge) {
        existingBadge.remove();
    }
    //add div
    const badgeDiv = document.createElement("div");
    badgeDiv.id = "badge";

    //background for color
    const badgeBackground = document.createElement("div");
    badgeBackground.className = "badge-background";
    const badgeHeader = document.createElement("div");

    //seperate hello from username
    badgeHeader.className = "badge-header";
    badgeHeader.innerHTML = "<p>Hello</p><p>my name is</p>";
    const badgeName = document.createElement("div");
    badgeName.className = "badge-name";
    badgeName.textContent = capitalizedAnagram;

    //append elements
    badgeBackground.appendChild(badgeHeader);
    badgeBackground.appendChild(badgeName);
    badgeDiv.appendChild(badgeBackground);
    document.getElementById("badge-container").appendChild(badgeDiv);
}

// Output each result
document.writeln("I fixed your name: ", sortUserName(userName), "<br>");
document.writeln("Task X - Bonus 1: Here is your sorted name with preserved case: ", sortUserNamePreserveCase(userName), "<br>");
document.writeln("Task X - Bonus 2: Here is your sorted name with spaces: ", sortUserNameAllowSpaces(userName), "<br>");
document.writeln("Task X - Bonus 3: Here is your shuffled Anagram: ", shuffleUserNameAnagram(userName), "<br>");
displayAnagramBadge(userName);