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

let multiple = 1;
for (let w=15; w<=35; w++) {
    multiple *= w
}
console.log(multiple);

let sum1 = 0;
let middle = 0;
for (let x=1; x<=500; x++) {
    sum1 += x;
    middle = sum1/x;
}
console.log(middle);

let sum2 = 0;
for (let s = 30; s <= 80; s++) {
    if (s % 2 === 0){
        sum2 += s;
    }
}

console.log(sum2);


for (let b = 100; b <= 200; b++) {
    if (b % 3 === 0){
        console.log(b);
    }
}




let number = prompt('Enter your number');
if (!isNaN(number)){
    for (n=0; n<=number; n++){
        if (number % n === 0){
            console.log (n)
        }
    }
}
else {number = prompt('Enter your number')}

let count = 0;
for  (h=0; h<=number; h++) {
    if (h % 2 ===0){
        if  (number % h === 0) {
            count++;
        }
    }
}
console.log (count);

let sum3 = 0;
for  (a=0; a<=number; a++) {
    if (a % 2 ===0){
        if  (number % a === 0) {
            sum3 += a;
        }
    }
}
console.log (sum3);

for (i=1; i<=10; i++){
    let str = '';
    for (j=1; j<=10; j++){
        if (j !== 10){
            str += i*j + '; ';
        }
        else {
            str += i*j;
        }
    }
    console.log(str);
}