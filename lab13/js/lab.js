/*
    lab.js - Lab 13: Loops
    Requirements: Working with your partner, experiment with loops.
    Authors: Keith Tran & Josh Chow
    Date: 11/18/24
*/

function FizzBuzz() {
    let oneLongString = ""; 

    for (let i = 1; i <= 200; i++) {
        let str = i + " "; 
        let words = ""; 

        if (i % 3 === 0) {
            words += "Fizz";
        }
        if (i % 5 === 0) {
            words += "Buzz";
        }
        if (i % 7 === 0) {
            words += "Boom";
        }

        if (words) {
            str += words + "!";
        }

        oneLongString += str + "<br>";
    }

    $("#output").html(oneLongString);
}

FizzBuzz();
