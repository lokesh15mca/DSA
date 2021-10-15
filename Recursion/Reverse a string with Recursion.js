function reverse(str) {
    if (str == "") {
        return str;
    } else {
        return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
    }
}

function runProgram(input) {
    input = input.trim();
    // console.log(input);
    // var temp = "";
    console.log(reverse(input));;

}
if (process.env.USER === "lokesh") {
    runProgram(`Masai school`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "")

        function reverse(str) {
            if (str == "") {
                return str;
            } else {
                return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
            }
        }

        function runProgram(input) {
            input = input.trim();
            // console.log(input);
            // var temp = "";
            console.log(reverse(input));;

        }
        if (process.env.USER === "lokesh") {
            runProgram(`Masai school`);
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
        runProgram(read);
    });

    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });
}