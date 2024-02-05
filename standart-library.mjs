import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

input.question("what's your name?", name=> {
    console.log($(name));
        input.close();
});


  