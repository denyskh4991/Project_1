let N = parseInt(prompt("Enter your number:"));

let isPrime = true;

if (N < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(N + " is a prime number");
} else {
    console.log(N + " isn't a prime number");
}