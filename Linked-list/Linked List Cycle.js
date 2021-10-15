const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    curr = head, pre = head;
    flag = true;
    while (curr != null && pre != null && curr.next != null) {
        pre = pre.next;
        curr = curr.next.next;
        if (pre == curr) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return "false"
    } else {
        return "true"
    }
};