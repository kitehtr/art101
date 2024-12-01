/*
    lab.js - Lab 16: JSON and APIs
    Requirements: Working with your partner, experiment with processing JSON from an API.
    Authors: Keith Tran & Josh Chow
    Date: 11/30/24
*/

$(document).ready(function() {
    // keep track of current comic number
    let currentComicNum = 0; 
    // Function to fetch and display comic data
    function getAndPutData(comicNum) {
        //  API call and places the image and title, maybe pass the endpoint URL
        let apiUrl = comicNum === 0 
            ? "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json") 
            : "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/${comicNum}/info.0.json`);
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the api docs)
            url: apiUrl,
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data expected back
            dataType: "json",
            // What do we do when the api call is successful
            success: function(data) {
                // do stuff
                let comicData = JSON.parse(data.contents);
                // Update the page with the new comic data
                $("#output").html(`
                    <h1><span>date: ${comicData.month}/${comicData.day}/${comicData.year}</span></h1>
                    <h1>Title: ${comicData.title} (#${comicData.num})</h1>
                    <img src="${comicData.img}" alt="${comicData.alt}" title="${comicData.alt}">
                    <br><br>
                    <div id="nav-buttons">
                        <button id="prev-btn">Previous</button>
                        <button id="next-btn">Next</button>
                    </div>
                    <br><br>
                `);
                // Update the current comic number
                currentComicNum = comicData.num;
                //click events for Previous and Next buttons
                $("#prev-btn").click(function() {
                    if (currentComicNum > 1) {
                        getAndPutData(currentComicNum - 1); 
                    }
                });
                $("#next-btn").click(function() {
                    getAndPutData(currentComicNum + 1); 
                });
            },
            // What we do if the api call fails
            error: function(jqXHR, textStatus, errorThrown) {
                // do stuff
                console.log("Error:", textStatus, errorThrown);
            }
        });
    }
    // Get latest comic 
    getAndPutData(0);
});