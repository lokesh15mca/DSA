function bubbleSort(arr, len) {

    if (len == 0) {
        return arr;
    }
    for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    bubbleSort(arr, len - 1)
}

function runProgram(input) {
    input = input.trim().split("\n");

    var len = Number(input[0].trim());
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);
    bubbleSort(arr, arr.length);
    console.log(arr.join(" "));

}
if (process.env.USER === "lokesh") {
    runProgram(`5
3 5 0 9 8`);
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