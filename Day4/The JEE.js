function runProgram(input) {
    var data = input.trim().split("\n");
    var std1 = data[0].trim().split(" ").map(Number);
    var std2 = data[1].trim().split(" ").map(Number);
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < std1.length; i++) {
        sum1 = sum1 + std1[i];
        sum2 = sum2 + std2[i];
    }
    if (sum1 > sum2) {
        console.log("First");
    } else if (sum1 == sum2) {
        if (std1[2] > std2[2]) {
            console.log("First");
        } else if (std1[2] < std2[2]) {
            console.log("Second");
        } else if (std1[0] > std2[0]) {
            console.log("First");
        } else {
            console.log("Second");
        }
    } else {
        console.log("Second");
    }
}
if (process.env.USER === "lokesh") {
    runProgram(`120 90 70
90 80 110`);
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