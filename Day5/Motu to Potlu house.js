function runProgram(input) {
    var data = Number(input);
    if (data > 5) {
        var reminder = data % 5;
        var final = data - reminder;
        if (reminder == 0) {
            console.log(final / 5);
        } else {
            console.log(1 + (final / 5));
        }
    } else if (data == 0) {
        console.log("0");
    } else {
        console.log("1");
    }

}
if (process.env.USER === "lokesh") {
    runProgram(`10`);
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