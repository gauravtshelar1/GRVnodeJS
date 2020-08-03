var events = require("events");


var em = new events.EventEmitter();


em.on("myEve", function (data) {
    console.log("First subscriber: " + data);
});

em.emit("myEve", "some data goes here...");