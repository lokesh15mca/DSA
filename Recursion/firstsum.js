function sumfirst(n, curr, sum) {
    if (n < curr) {
        return sum;
    }

    sum = sum + curr;
    return sumfirst(n, curr + 1, sum);
}

function runProgram(input) {
    var [n, curr, sum] = input.trim().split(" ").map(Number);;
    console.log(n + " " + curr + " " + sum);
    console.log(sumfirst(n, curr, sum));
}
if (process.env.USER === "lokesh") {
    runProgram(`5 1 0`);
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