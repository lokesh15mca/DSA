var DLL = class {
    constructor(val) {
        this.pre = null;
        this.data = val;
        this.next = null;
    }
}

function insert_at_tail(head, nodeData) {
    var node = new DDL(nodeData);
    if (head == null) {
        head = node;
    } else {
        curr = head;
        while (curr != null) {
            curr = curr.next;
        }
        curr.next = node;
        node.pre = curr;
    }

    return head;
}

function Deleting_a_Node(head, position) {

    curr = head;
    back = head;
    for (var i = 0; i < position; i++) {
        back = curr;
        curr = curr.next;
    }
    back.next = curr.next;
    curr.next.pre = back;
    return head;
}

function Insert_at_a_specific_position(head, data, position) {
    var node = new DDL(data);
    curr = head;
    for (var i = 0; i < position; i++) {
        curr = curr.next;
    }
    node.pre = curr;
    node.next = curr.next;
    curr.next = node;
    return head;
}



function runProgram(input) {
    input = input.trim().split("\n");

}
if (process.env.USER === "lokesh") {
    runProgram(`2
1
3`);
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