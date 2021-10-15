function runProgram(input) {
    input = Number(input.trim());

    var unit = input - 80;
    var count = 0;
    if (unit <= 150) {
        console.log(unit / 3);
    } else if (unit > 150 && unit <= 650) {
        var pp = unit - 150;
        var rem = pp / 5;
        console.log(50 + rem);
    } else {
        var pp = unit - 650;
        var rem = pp / 10;
        console.log(150 + rem);
    }


}
if (process.env.USER === "lokesh") {
    runProgram(`930`);
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