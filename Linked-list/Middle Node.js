var LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData,
            this.next = null;
    }
}

function insertNodeAtTail(head, nodeData) {
    const node = new LinkedListNode(nodeData);
    if (head == null) {
        head = node;
        return head;
    } else {
        var current = head;

        while (current.next) {
            current = current.next;
        }
        current.next = node;
        return head;

    }
}

function middleNode(head) {
    var arr = [];
    var curr = head;

    while (curr) {
        arr.push(curr.data);
        curr = curr.next;
    }
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2]);
    } else {
        var index = (arr.length - 1) / 2;
        return (arr[index]);
    }
}