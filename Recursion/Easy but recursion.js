function add(arr, len) {
    if (len < 0) {
        return 0;
    } else {
        // console.log(len);
        return arr[len] + add(arr, len - 1);
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (var i = 2; i < input.length; i = i + 2) {
        var line = input[i].trim().split(" ").map(Number);
        console.log(add(line, line.length - 1));
    }

}
if (process.env.USER === "lokesh") {
    runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);
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