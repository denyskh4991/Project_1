let N1 = parseInt(prompt("Enter your number:"));

let isPrime = true;

if (N1 < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < N1; i++) {
        if (N1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(N1 + " is a prime number");
} else {
    console.log(N1 + " isn't a prime number");
}