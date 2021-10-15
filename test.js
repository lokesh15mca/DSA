function rev(n, l) {
    if (l == 0) {
        return n[l];
    } else {
        l--;
        return n[l] + rev(n, l)
    }
}

function runProgram(input) {
    var num = Number(input.trim())
    var name = "Lokesh",
        l = name.length;
    // console.log(name[l - 1]);

    console.log(rev(name, l - 1));
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