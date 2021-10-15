const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    curr = head;
    pre = head;
    while (curr.next != null) {
        // console.log(curr.data)
        curr = curr.next;

        if (curr.data > pre.data) {
            // console.log("curr "+curr.data+ " pre "+pre.data)
            pre.next = curr
            pre = pre.next;
        }

    }
    pre.next = null
    return head
};