let sum1 = 0;
let middle = 0;

for (let i = 1; i <= 500; i++) {
    sum1 += i;
    middle = sum1 / i;
}

console.log(middle);