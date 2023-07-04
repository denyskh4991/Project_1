let number = prompt('Enter your number');

if (!isNaN(number)){
    for (i = 0; i <= number; i++){
        if (number % i === 0){
            console.log (i)
        }
    }
}
else {number = prompt('Enter your number')}