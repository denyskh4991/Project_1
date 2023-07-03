function askForNumbers() {
    let number1 = null;
    let number2 = null;
    let number3 = null;

    while (number1 === null || isNaN(number1)) {
        number1 = parseFloat(prompt("Enter the first number:"));
        if (number1 === null) {
            console.log("You refused to enter the number");
            return;
        }
    }

    while (number2 === null || isNaN(number2)) {
        number2 = parseFloat(prompt("Enter the second number:"));
        if (number2 === null) {
            console.log("You refused to enter the number");
            return;
        }
    }

    while (number3 === null || isNaN(number3)) {
        number3 = parseFloat(prompt("Enter the third number:"));
        if (number3 === null) {
            console.log("You refused to enter the number");
            return;
        }
    }

    console.log(number1, number2, number3);
}

askForNumbers();