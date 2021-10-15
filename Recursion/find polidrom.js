function find(name, left, right) {
    if (left > right) {
        console.log("l>r");
        return false;
    }
    if (left == right) {
        console.log("i==r");
        return true;
    }
    console.log(name[left] + " " + name[right]);
    if (name[left] != name[right]) {
        return false;
    }
    return find(name, left + 1, right - 1);
}
var name = "lool";
console.log(find(name, 0, name.length - 1));