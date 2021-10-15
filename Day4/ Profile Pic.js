function runProgram(input) {
    var data = input.trim().split("\n");
    var line1 = data[0].trim().split(" ").map(Number);
    var line2 = data[1].trim().split(" ").map(Number);
    if (line1[0] <= line2[0] && line1[1] <= line2[1]) {
        console.log("Upload");
    } else if (line1[0] > line2[0]) {
        console.log("Increase Length");
    } else {

        console.log("Increase Width");
    }
}
if (process.env.USER === "lokesh") {
    runProgram(`12 14
8 19`);
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