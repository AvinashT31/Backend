const eventlisterner = require("events");
const addeventlisterner = new eventlisterner();
const eventhandle = () =>{
    console.log("event occured !");
} 
addeventlisterner.on("myevent", eventhandle);
addeventlisterner.emit("myevent");


// const EventEmitter = require('events');
// // Create a new instance of EventEmitter
// const myEmitter = new EventEmitter();
// // Define an event handler function
// const eventHandler = () => {
//   console.log('Event occurred!');
// };
// // Attach the event handler to the 'myEvent' event
// myEmitter.on('myEvent', eventHandler);
// // Emit the 'myEvent' event
// myEmitter.emit('myEvent');
