function runProgram(input) {
    var data = input.trim().split("\n");
    var team1 = data[0].trim().split(" ").map(Number);
    var team2 = data[1].trim().split(" ").map(Number);
    if (team1[0] > team2[0]) {
        console.log("New Zealand");
    } else if (team1[0] < team2[0]) {
        console.log("England");
    } else if (team1[1] > team2[1]) {
        console.log("New Zealand");
    } else if (team1[1] < team2[1]) {
        console.log("England");
    } else if (team1[2] > team2[2]) {
        console.log("New Zealand");
    } else {
        console.log("England");
    }

}
if (process.env.USER === "lokesh") {
    runProgram(`241 15 21
241 15 26`);
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