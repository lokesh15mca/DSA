function runProgram(input) {
    var data = Number(input);
    var n = 32 / data;
    var div = Math.floor(n);
    if (data == 0) {
        console.log("-1");
    } else {
        if (div == 0) {
            console.log("Too Low");
        } else if (div < 0) {
            console.log("-1");
        } else {

            console.log(div);
        }
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