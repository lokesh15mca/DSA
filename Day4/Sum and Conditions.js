function runProgram(input) {
    var data = input.trim().split("\n");
    // console.log(data);
    var arr = data[1].trim().split(" ").map(Number);
    // console.log(arr);
    var sum = arr.reduce(function(al, el) {
        return al + el;
    })
    if (sum > 100) {
        console.log("Greater");
    } else {
        console.log("Lesser");
    }
}
if (process.env.USER === "lokesh") {
    runProgram(`5
21 24 2 54 8`);
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