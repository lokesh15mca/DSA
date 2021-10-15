const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function(head) {
    curr = head, pre = head;
    var flag = true,
        result = true;
    // console.log(curr.data+" "+pre.next.data)
    if (curr.data < pre.next.data) {
        while (curr.next) {
            curr = curr.next;
            if (flag == true) {
                if (pre.data < curr.data) {
                    pre = curr;
                } else {
                    result = false;
                    break;
                }
                flag = false;
            } else {
                if (pre.data > curr.data) {
                    pre = curr;
                } else {
                    result = false;
                    break;
                }
                flag = true;
            }
        }

    } else {
        // console.log("else")
        while (curr.next) {
            curr = curr.next;
            if (flag == true) {
                if (pre.data > curr.data) {
                    pre = curr;
                } else {
                    result = false;
                    break;
                }
                flag = false;
            } else {
                if (pre.data < curr.data) {
                    pre = curr;
                } else {
                    result = false;
                    break;
                }
                flag = true;
            }
        }
    }


    return result;

};