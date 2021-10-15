function runProgram(input) {
    var data = Number(input);
    var sum = 0;
    for (var i = 0; i <= data; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
if (process.env.USER === "lokesh") {
    runProgram(`8`);
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