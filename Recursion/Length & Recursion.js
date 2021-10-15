function findlength(str, len, count) {
    if (str[len] == undefined) {

        return count;
    } else {
        count++;
        return findlength(str, len + 1, count);
    }

}

function runProgram(input) {
    input = input.trim().split("");
    var len = 0,
        count = 0;
    console.log(findlength(input, len, count));
    // console.log(input[11]);

}
if (process.env.USER === "lokesh") {
    runProgram(`masaischool`);
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