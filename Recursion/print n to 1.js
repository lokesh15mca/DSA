function fac(num, temp) {
    if (num == 1 || num == 0) {
        return 1
    } else {
        console.log(num);
        return fac(num - 1, temp++);
    }
}

function runProgram(input) {
    var num = Number(input.trim())
        // console.log(typeof(num));
    console.log(fac(num, 1));
}
if (process.env.USER === "lokesh") {
    runProgram(`5`);
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