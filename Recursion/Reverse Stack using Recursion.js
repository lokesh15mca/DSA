var arr = [],
    rev = [];

function stack(data, len) {
    if (len == 0) {
        return 0;
    } else {
        console.log(data[len - 1]);
        stack(data, len - 1)
    }
}

function runProgram(input) {
    input = input.trim().split("\n").map(Number);
    stack(input, input.length - 1)

}
if (process.env.USER === "lokesh") {
    runProgram(`1
2
3
4
-1`);
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