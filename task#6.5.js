var N = parseInt(prompt("Enter your number:"));
let isPowerOfThree = false;

if (N <= 0) {
    isPowerOfThree = false;
} else {
    while (N !== 1) {
        if (N % 3 !== 0) {
            isPowerOfThree = false;
            break;
        }
        N /= 3;
    }

    if (N === 1) {
        isPowerOfThree = true;
    }
}

if (isPowerOfThree) {
    console.log("You can get a number by raising the number 3 to a certain power");
} else {
    console.log("It is impossible to get a number by raising the number 3 to some power");}