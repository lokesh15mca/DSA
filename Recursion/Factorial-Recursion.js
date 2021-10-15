function fact(num) {
    if (num == 1) {
        return num;
    } else {
        return num * fact(num - 1);
    }
}

function runProgram(input) {
    input = Number(input.trim())
        // console.log(input);
    console.log(fact(input));;

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