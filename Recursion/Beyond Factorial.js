function fact(num) {
    if (num == 1) {
        return 0;
    } else {
        return fact(num - 1) + Math.log(num)
    }
}

function runProgram(input) {
    input = Number(input.trim())



    console.log((fact(input)).toFixed(4));


}
if (process.env.USER === "lokesh") {
    runProgram(`3`);
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