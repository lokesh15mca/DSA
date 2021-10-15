function runProgram(input) {
    var data = input.split("\n");
    var mob = data[0].split(" ");
    var count = data[1].split(" ");
    var mob1 = (mob[0] * count[0]) + (mob[1] * count[1]) + (mob[2] * count[2]) + (mob[3] * count[3]);
    if (mob1 <= 150000) {
        console.log("Possible");
    } else {
        console.log("Not Possible");
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

process.on("SIGINT", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});