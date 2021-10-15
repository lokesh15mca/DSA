function runProgram(input) {
    var arr = input.trim().split("\n");
    var data = arr[1].trim().split(" ").map(Number);
    // console.log(data);
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            sum = sum + data[i];
            // console.log(i);
        }
    }
    console.log(sum);
}
if (process.env.USER === "lokesh") {
    runProgram(`7
4 5 5 5 6 6 7`);
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