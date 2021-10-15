const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    var curr = head;
    var size = 0;

    while (curr) {
        curr = curr.next;
        size++;
    }

    if (size <= k && size % k == 0) {
        return head;
    } else {
        k = k % size;
        // console.log(k+" "+size)
        var pre = head,
            cur = head,
            last = head;
        var terv = size - k; //
        var temp = 0;
        for (var i = 0; i < size - 1; i++) {
            if (i == (terv - 1)) {
                pre = last;
                cur = last.next;
            }
            last = last.next;
        }


        last.next = head;
        head = cur;
        pre.next = null
        return head;
    }

};