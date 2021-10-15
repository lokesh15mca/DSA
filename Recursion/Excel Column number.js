function runProgram(input) {
    input = input.trim().split("\n");
    for (var i = 1; i < input.length; i++) {
        var char = input[i];
        var n = 0;
        for (var j = 0; j < char.length; j++) {
            n = char[j].charCodeAt() - 64 + n * 26;
        }
        console.log(n);
    }


}
if (process.env.USER === "lokesh") {
    runProgram(`3
A
AB
ZY`);
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