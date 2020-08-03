var emitter = require("events").EventEmitter;

var em = new emitter();
em.addListener("eventOne", function (data) {
    console.log("First subscriber: " + data);
});
em.on("eventTwo", function (data) {
    console.log("Second subscriber: " + data);
});
em.emit("eventOne", "Some data..!");
em.emit("eventTwo", "Some data..!");