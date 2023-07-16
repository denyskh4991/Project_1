let lengthInput = prompt("Введіть довжину масиву:");
let length = parseInt(lengthInput);

if (!isNaN(length)) {
    let myArray = [];

    for (let i = 0; i < length; i++) {
        let elementInput = prompt("Введіть елемент " + (i + 1) + " масиву:");
        let element = parseFloat(elementInput);
        myArray.push(element);
    }

    myArray.sort(function(a, b) {
        return a - b;
    });
    myArray.splice(1, 3);

    console.log(myArray);
} else {
    alert('Некоректне введення. Будь ласка, введіть число.');
}