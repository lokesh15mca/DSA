const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let num = "";

    curr = head;

    while (curr.next) {
        num = num + curr.data;
        curr = curr.next;
    }
    // console.log(curr.data)
    curr.data = curr.data + 1;
    // console.log(curr.data)
    return head
};