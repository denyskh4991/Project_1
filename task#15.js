function createSumClosure() {
    let x = 0;

    function sumClosure(y) {
        x += y;
        return x;
    }

    return sumClosure;
}

const sumFunc = createSumClosure();

console.log(sumFunc(3));
console.log(sumFunc(5));
console.log(sumFunc(20));

