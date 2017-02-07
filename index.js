//
//  Load libraries
//
var express = require("express");
var path = require("path");

// Create an instance of Express app
var app = express();

// Set port to 3000
app.set("port", parseInt(process.argv[2]) || process.env.APP_PORT || 3000);
console.log("Port is: %d", app.get("port"));



// Define routes...
app.use(express.static(__dirname + "/public"));
app.use("/assets", express.static(__dirname + "/images"));

// Start app
app.listen(app.get("port"), function() {
    console.info("Application is listening on port: " + app.get("port"));
});



/*
var port;
var strPort = process.argv[2];
if(strPort){
    port = parseInt(strPort);
}
else {
    port = 3000;
}

app.set("port", port);

console.log("Port is %s, type is %s", port, typeof port);
*/