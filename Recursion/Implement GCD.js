function count(a, b) {
    if (a == 0) {
        return b;
    }
    if (b == 0) {
        return a;
    }


    return count(b, a % b);
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (var i = 1; i < input.length; i++) {
        var [a, b] = input[i].trim().split(" ").map(Number);
        console.log(count(a, b));
    }

}
if (process.env.USER === "lokesh") {
    runProgram(`10
265974783 154274012
699535256 895330594
813164300 144820
640771391 159913
93805471 69718324
999999999 999999998
613523760 91955
248799319 505008758
707062645 91219220
902791288 185836`);
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