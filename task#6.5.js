var N2 = parseInt(prompt("Enter your number:"));
let isPowerOfThree = false;

if (N2 <= 0) {
    isPowerOfThree = false;
} else {
    while (N2 !== 1) {
        if (N2 % 3 !== 0) {
            isPowerOfThree = false;
            break;
        }
        N2 /= 3;
    }

    if (N2 === 1) {
        isPowerOfThree = true;
    }
}

if (isPowerOfThree) {
    console.log("You can get a number by raising the number 3 to a certain power");
} else {
    console.log("It is impossible to get a number by raising the number 3 to some power");}