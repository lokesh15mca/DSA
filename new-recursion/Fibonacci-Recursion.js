function fibonacci(n) {
    if (n == 1 || n == 0) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

function runProgram(input) {
    var result = fibonacci(Number(input));
    console.log(result);
}
if (process.env.USER === "lokesh") {
    runProgram(`4`);
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