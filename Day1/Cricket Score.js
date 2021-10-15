function runProgram(input) {
    var data = input.split(" ");
    var one = Number(data[0]);
    var two = Number(data[1]) * 2;
    var three = Number(data[2]) * 3;
    var four = Number(data[3]) * 4;
    var six = Number(data[4]) * 6;
    console.log(one + two + three + four + six);
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