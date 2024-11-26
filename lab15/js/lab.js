/*
    lab.js - Lab 15: AJAX
    Requirements: Working with your partner, experiment with jQuery and AJAX
    Authors: Keith Tran & Josh Chow
    Date: 11/25/24
*/

$(document).ready(function() {
    //click listener
    $("#activate").click(function() {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the api docs)
            url: "https://yesno.wtf/api",
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data expected back
            dataType: "json",
            // What do we do when the api call is successful
            success: function(data) {
                // do stuff
                // Update page
                $("#output").append("<h1>" + data.answer + "</h1>"); 
                $("#output").append("<img src='" + data.image + "'>"); 
            },
            // What we do if the api call fails
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});
