//Before we can run this program we have to type "npm ci" in the terminal
//Ignore this line, it is importing a library named prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

let time = prompt('What should I set the timer to? ');

while ( time > 0){
    console.log("Tick...");
    time--;
}
console.log("Boom!");