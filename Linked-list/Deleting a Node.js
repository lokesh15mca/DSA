var LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData,
            this.next = null;
    }
}

function insertNodeAtTail(head, nodeData) {
    const node = new LinkedListNode(nodeData);
    if (head == null) {
        head = newData;
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

function deleteNode(head, position) {
    curr = head;;
    prev = curr;
    it = 0;
    while (it < position) {
        it++;
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
    return head;
}