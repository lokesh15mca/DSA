function runProgram(input) {
    var data = input.trim().split(" ").map(Number)
    var count = 0;
    for (var i = data[0]; i <= data[1]; i++) {
        if (i % data[2] == 0) {
            count++
        }
    }
    console.log(count);
}
if (process.env.USER === "lokesh") {
    runProgram(`1 10 1`);
} else {
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
}