function runProgram(input) {
    input = input.trim().split("\n");
    for (var i = 1; i < input.length; i++) {
        var [first, sec, three, four] = input[i].trim().split(" ").map(Number);
        var fMin = (first * 60) + sec;
        var sMin = (three * 60) + four;
        var time = Math.abs(fMin - sMin);
        if (time < 60) {
            console.log("0 " + time);
        } else {
            var hr = Math.floor(time / 60);
            console.log(hr + " " + (time - (hr * 60)));
        }
    }

}
if (process.env.USER === "lokesh") {
    runProgram(`2
1 44 2 14
2 42 8 23`);
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