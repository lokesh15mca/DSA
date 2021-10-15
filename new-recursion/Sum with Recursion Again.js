function recursion(arr, len) {
    if (len == 0) {
        return 0
    } else {
        return Math.abs(arr[len] - arr[len - 1]) + recursion(arr, len - 1)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");

    for (var i = 2; i < input.length; i = i + 2) {
        var arr = input[i].trim().split(" ").map(Number);
        var result = recursion(arr, arr.length - 1);
        console.log(result);
    }

}
if (process.env.USER === "lokesh") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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