var linkedList = class {
    constructor(nodeData) {
        this.data = nodeData,
            this.next = null;
    }
}

function insertNodeAtTail(head, data) {
    var newData = new linkedList(data);
    if (head == null) {
        head = newData;
        return head;
    } else {
        var current = head;

        while (current.next) {
            current = current.next;
        }
        current.next = newData;
        return head;

    }
}