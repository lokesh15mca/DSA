function runProgram(input) {
    input = input.trim().split("\n");

    for (var i = 2; i < input.length; i = i + 2) {
        var arr = input[i].trim().split(" ").map(Number);
        var stack = [];
        stack.push(arr[0]);
        var result = [];
        for (var j = 1; j < arr.length; j++) {

            if (stack.length == 0) {
                stack.push(arr[j]);
                continue;
            }
            while (stack.length == 0 == false && stack[stack.length - 1] < arr[j]) {
                result.push(arr[j])
                stack.pop();
            }
            stack.push(arr[j]);
        }
        while (stack.length != 0) {
            result.push(-1)
            stack.pop();
        }
        console.log(result.join(' '));
    }
}
if (process.env.USER === "lokesh") {
    runProgram(`10
    6
    8 11 1 20 15 19
    1
    15
    9
    2 5 1 6 2 4 4 5 5
    6
    8 8 10 3 8 3
    11
    16 10 8 10 9 8 15 9 4 16 15
    2
    4 2
    11
    6 9 10 5 6 3 9 2 10 11 4
    13
    11 1 6 12 12 1 14 12 10 12 7 11 15
    12
    3 1 1 3 2 5 6 4 3 3 5 4
    14
    9 8 9 8 4 4 8 9 4 5 5 4 3 3`);
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