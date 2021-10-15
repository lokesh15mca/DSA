function runProgram(input) {
    var input = input.trim().split("\n");
    var row = input[0].trim().split(" ").map(Number);
    var target = Number(row[1]);
    var arr = input[1].trim().split(" ").map(Number);
    var count = 0
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var temp = arr[i] + arr[j];
            if (temp == target) {
                count++;
            }
        }
    }
    console.log(count);
}
if (process.env.USER === "lokesh") {
    runProgram(`5 9
3 0 6 2 7`);
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