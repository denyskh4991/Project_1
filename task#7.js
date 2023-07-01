let number1 = prompt('Enter your first number');
let number2 = prompt('Enter your second number');
let number3 = prompt('Enter your third number');

while(isNaN(number1) || number1 === '') {
    alert('A wrong number was entered, try again');
    number1 = prompt('Enter your first number');
}
if (!isNaN(number1)) {
    console.log(number1);
    while(isNaN(number2) || number2 === ''){
        alert('A wrong number was entered, try again');
        number2 = prompt('Enter your second number');
    }
}
if (!isNaN(number2)) {
    console.log(number2);
    while(isNaN(number3) || number3 === ''){
        alert('A wrong number was entered, try again');
        number3 = prompt('Enter your third number');
    }
}
if (!isNaN(number3)) {
    console.log(number3);
}