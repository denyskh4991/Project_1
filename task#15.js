function createSumClosure() {
    let x = 3;

    function sumClosure(y) {
        x += y;
        return x;
    }

    return sumClosure;
}

const sumFunc = createSumClosure();

console.log(sumFunc(0));
console.log(sumFunc(5));
console.log(sumFunc(20));

