var fs = require("fs");

fs.rename("demo.html", "test.html", function (err) {
    if (err) throw err;
    console.log("File Renamed!");
});