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

$(document).ready(function() {
    // Click listener
    $("#activate2").click(function() {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the API docs)
            url: "https://api.nasa.gov/planetary/apod", 
            data: {
                api_key: "e7IO0eF8JXhw3fNSxsUIGzDVuvkujVZIX5LVefCt",
            },
            // Whether this is a POST or GET request
            type: "GET", 
            // The type of data expected back
            dataType: "json",
            // What to do when the API call is successful
            success: function(data) {
                // Update the page with all response data
                $("#output").append(`
                    <h1>${data.title}</h1>
                    <p><strong>Date:</strong> ${data.date}</p>
                    <p>${data.explanation}</p>
                    <p><strong>Media Type:</strong> ${data.media_type}</p>
                    <p><strong>Service Version:</strong> ${data.service_version}</p>
                    <img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto;">
                    <p><a href="${data.hdurl}" target="_blank">View HD Image</a></p>
                `);
            },
            // What we do if the api call fails
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});