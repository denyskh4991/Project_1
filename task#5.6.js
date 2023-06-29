let sum = 0;
let middle = 0;

for (let i=1; i<=500; i++) {
    sum += i;
    middle = sum/i;
}

console.log(middle);