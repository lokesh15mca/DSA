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

function insertNodeAtPosition(head, data, position) {
    const node = new LinkedListNode(data);
    let curr = head;
    it = 0;
    if (position == 0) {
        node.next = head;
        head = node;
    } else {
        while (it < position - 1) {
            it++;
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
    }
    return head;
}


function nth_node(head, position) {

    var arr = [];
    curr = head;
    while (curr) {
        arr.push(curr.data);
        curr = curr.next;
    }
    return arr[arr.length - position]

}