/*
    lab.js - Lab 16: JSON and APIs
    Requirements: Working with your partner, experiment with processing JSON from an API.
    Authors: Keith Tran & Josh Chow
    Date: 11/30/24
*/

$(document).ready(function() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json"),
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data expected back
        dataType: "json",
        // What do we do when the api call is successful
        success: function(data) {
            // do stuff
            let comicData = JSON.parse(data.contents);
            // Update page
            $("#output").append("<h1><span>date: " + comicData.month + "</span> <span>/" + comicData.day + "</span> <span>/ " + comicData.year + "</span></h1>");
            $("#output").append("<h1>" + "Title: " + comicData.title + "(#" + comicData.num + ")" + "</h1>");
            $("#output").append("<img src='" + comicData.img + "' alt='" + comicData.alt + "'>"); 
        },
        // What we do if the api call fails
        error: function(jqXHR, textStatus, errorThrown) {
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
});
