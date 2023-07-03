function askForNumbers() {
    let numbers = [];

    for (let i = 1; i <= 3; i++) {
        let input = null;
        while (input === null || isNaN(input)) {
            input = prompt(`Введіть число ${i}:`);
            if (input === null) {
                alert('You refused to enter a number');
                return;
            }
        }
        const number = parseFloat(input);
        numbers.push(number);
    }

    console.log(numbers);
}

askForNumbers();