function runProgram(input) {
    var data = input.trim().split("\n");
    var arr = data[1].trim().split(" ").map(Number);
    var min = arr[0],
        max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(min);
    console.log(max);
}
if (process.env.USER === "lokesh") {
    runProgram(`4
-2 0 8 4`);
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