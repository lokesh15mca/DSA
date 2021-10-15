function runProgram(input) {
    var data = input.split(" ");
    var speed = Number(data[0]) / Number(data[1]);
    if (speed > 40) {
        console.log("Apply Brake");
    } else {
        console.log("Keep Going");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input) {
    read += input;
});
process.stdin.on("end", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
100
process.on("SIGINT", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});