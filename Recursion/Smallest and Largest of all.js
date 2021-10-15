function smallest(arr, len, small) {
    if (len == 0) {
        return small;
    } else {
        if (small > arr[len]) {
            small = arr[len];
        }

        return smallest(arr, len - 1, small)
    }
}

function largest(arr, len, large) {
    if (len == 0) {
        return large;
    } else {
        if (large < arr[len]) {
            large = arr[len];
        }

        return largest(arr, len - 1, large)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var len = Number(input[0]);
    var arr = input[1].trim().split(" ").map(Number);
    var small = arr[0],
        large = arr[0];
    console.log(smallest(arr, len, small));
    console.log(largest(arr, len - 1, large));

}
if (process.env.USER === "lokesh") {
    runProgram(`4
-2 0 8 4`);
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