const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {

    curr1 = l1;
    curr2 = l2;
    var list = new ListNode(-1);
    var temp = list;
    while (curr1 != null && curr2 != null) {
        // console.log(curr1.val+" "+curr2.val)
        if (curr1.val < curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next
    }
    while (curr1 != null) {
        temp.next = curr1;
        curr1 = curr1.next;
        temp = temp.next
    }
    while (curr2 != null) {
        temp.next = curr2;
        curr2 = curr2.next;
        temp = temp.next
    }
    return list.next;
};