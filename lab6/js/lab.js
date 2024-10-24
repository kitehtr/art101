// lab.js - Lab 6 - experiment with JavaScript arrays and objects.
// Author: Keith Tran & Josh Chow
// Date: 10/24/24

// Define Variables
myTransport = ["Metrobus", "walking", "electric scooter", "electric bike", "car"];

//Object for main ride
var myMainRide = {
  make: "Nissan",
  model: "GTR-35",
  color: "Bayside Blue",
  year: 2019,
  age: function() {
      return 2024 - this.year;
  }
}

// Output
document.writeln("My forms of transportation: " + myTransport, "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


