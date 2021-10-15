const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    var curr = head,
        pre = null,
        n = head;

    while (n) {
        n = n.next;
        curr.next = pre;
        pre = curr;
        curr = n;
    }
    head = pre;
    return head
}