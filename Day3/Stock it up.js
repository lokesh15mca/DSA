function runProgram(input) {
    var data = input.split("\n");
    // console.log(data);
    var arr = [550, 240, 84, 159, 80, 160, 252];
    var week = Number(data[0]);
    var line = data[1].split(" ");
    // console.log(line);
    var sum = 0;

    for (var i = 0; i < line.length; i++) {
        var value = Number(line[i])
        if (value == 1) {
            sum = sum + arr[i];
            // console.log(i);
        }
    }
    console.log(sum * week);
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