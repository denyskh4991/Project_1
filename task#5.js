let str = '';
for (let i=10; i<=20; i++) {
    str += i;

    if (i !== 20) {
        str += ', ';
    }
}
console.log(str);

for (let m=10; m<=20; m++) {
    console.log(Math.pow(m, 2));
}

for (let k=1; k<=10; k++) {
    console.log(k*7);
}

let sum = 0;
for (let q=1; q<=15; q++) {
    if (Number.isInteger(q)) {
        sum += q
    }
}
console.log(sum);