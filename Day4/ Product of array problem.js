function runProgram(input) {
    var data = input.trim().split("\n");
    var arr = data[1].trim().split(" ").map(Number);
    var sum = 1;
    for (var i = 0; i < arr.length; i++) {
        sum = sum * arr[i]
    }
    console.log(sum);
}
if (process.env.USER === "lokesh") {
    runProgram(`5
3 5 2 9 4`);
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