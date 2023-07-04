let sum3 = 0;

for  (i = 0; i <= number; i++) {
    if (i % 2 ===0){
        if  (number % i === 0) {
            sum3 += i;
        }
    }
}

console.log (sum3);