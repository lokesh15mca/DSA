function fibo(num) {
    if ((num == 0) || (num == 1)) {
        return num;
    } else {
        return fibo(num - 1) + fibo(num - 2);
    }

}

console.log(fibo(4))