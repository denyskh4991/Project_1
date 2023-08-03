const myArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let positiveCount = 0;

for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] > 0) {
        sum += myArray[i];
        positiveCount++;
    }
}

console.log("Сума позитивних елементів: " + sum);
console.log("Кількість позитивних елементів: " + positiveCount);


let minNumber = Math.min(...myArray);

console.log("Мінімальний елемент масиву: " + minNumber);


let idxMin = myArray.indexOf(minNumber);

console.log("Порядковий номер мінімального елемента масиву: " + idxMin);


let maxNumber = Math.max(...myArray);

console.log("Максимальний элемент масиву: " + maxNumber);


let idxMax = myArray.indexOf(maxNumber);

console.log("Порядковий номер максимального елемента масиву: " + idxMax);


let negativeCount = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 0) {
        negativeCount++;
    }
}

console.log("Кількість негативних елементів: " + negativeCount);

let oddPositiveCount = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
        oddPositiveCount++;
    }
}

console.log("Кількість позитивних непарних елементів: " + oddPositiveCount);


let evenPositiveCount = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 === 0) {
        evenPositiveCount++;
    }
}

console.log("Кількість позитивних парних елементів: " + evenPositiveCount);


let sumEven = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 === 0) {
        sumEven += myArray[i];
    }
}

console.log("Сума позитивних парних елементів: " + sumEven);


let sumOdd = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
        sumOdd += myArray[i];
    }
}

console.log("Сума позитивних непарних елементів: " + sumOdd);


let multiply = 1;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0) {
        multiply *= myArray[i];
    }
}

console.log("Добуток позитивних елементів: " + multiply);


let maxElement = myArray[0];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
    }
}

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== maxElement) {
        myArray[i] = 0;
    }
}

console.log("Найбільший елемент масиву: " + maxElement);
console.log("Масив після обнулення: " + myArray);