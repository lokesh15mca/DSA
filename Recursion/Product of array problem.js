function product(arr, len) {
    // console.log(typeof(arr), len);
    if (len < 0) {
        return 1;
    } else {
        return arr[len] * product(arr, len - 1)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);
    console.log(product(arr, arr.length - 1));


}
if (process.env.USER === "lokesh") {
    runProgram(`5
3 5 2 9 4`);
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