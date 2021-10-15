function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

function runProgram(input) {
    var result = factorial(Number(input));
    console.log(result);
}
if (process.env.USER === "lokesh") {
    runProgram(`5`);
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