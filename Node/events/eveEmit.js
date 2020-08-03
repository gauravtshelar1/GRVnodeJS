var events = require("events");
var eventEmitter = new events.EventEmitter();


var myEventHandler = function () {
    console.log(" file open...!");
};


eventEmitter.on("abc", myEventHandler);


eventEmitter.emit("abc");