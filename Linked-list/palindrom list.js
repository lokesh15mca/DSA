const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function(head) {
    curr = head;
    var str = ""
    while (curr) {
        str = str + curr.data;
        curr = curr.next;
    }
    var temp = ""
    for (var i = str.length - 1; i >= 0; i--) {
        temp = temp + str[i];
    }
    var flag = true;
    if (temp == str) {
        value = true;
    } else {
        value = false;
    }
    return value
};