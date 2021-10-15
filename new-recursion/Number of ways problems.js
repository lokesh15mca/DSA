function ways(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return ways(n - 1) + ways(n - 2) + ways(n - 3)
    }
}

function runProgram(input) {
    var result = ways(Number(input));
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