function Knight(i, j, n) {
    if (i == 1 || j == 1) {
        return 1;
    } else {
        n = n - 1;
        return Knight(i - 2, j + 1, n) + Knight(i - 2, j - 1, n) + Knight(i - 1, j + 2, n) + Knight(i - 1, j + 2, n) + Knight(i + 1, j - 2, n) + Knight(i + 1, j + 2, n) + Knight(i + 2, j - 1, n) + Knight(i + 2, j + 1, n)
    }
}

function runProgram(input) {
    var [i, j, k] = input.trim().split(" ").map(Number);
    var result = Knight(i, j, k);
    console.log(result);
}
if (process.env.USER === "lokesh") {
    runProgram(`3 3 1`);
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