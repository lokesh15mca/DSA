function runProgram(input) {
    var data = input.split("\n");
    var line1 = data[0].split(" ");
    var line2 = data[1].split(" ");
    var sum = 0;
    for (var i = 0; i < line1.length; i++) {
        var count = Number(line1[i]) * Number(line2[i])
        sum = sum + count;
    }
    console.log(sum);
}

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