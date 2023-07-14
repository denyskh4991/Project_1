function askForNumbers() {
    let a = null;
    let b = null;
    let c = null;

    function getUserNumber (str) {
        let num = prompt(str);

        while (num === null || num === "" || isNaN(num)) {
            if (num === null){
                return num;
            }
            num = prompt(str);
        }
        return +num;
    }

    function finalMessage () {
        alert('Шкода. Сподіваюсь ще побачитись');
    }

    const inputA = prompt(
        "Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0\nВведіть a"
    );

    if (inputA === null) {
        return finalMessage();
    }

    if (!isNaN(inputA) && inputA !== "") {
        a = +inputA;
    }
    else {
        a = getUserNumber("Введіть a");
    }

    if (a === null) {
        return finalMessage();
    }

    b = getUserNumber("a= "+ a +"\nВведіть b");
    if (b === null) {
        return finalMessage();
    }

    c = getUserNumber("a=" + a + ", b=" + b + "\nВведіть c");
    if (c === null) {
        return finalMessage();
    }

    const results = quadraticEquation(a, b, c, invalidCallback);
    showTheResults(a, b, c, results);
}

askForNumbers();

function quadraticEquation(a, b, c, invalidCallback) {

    if (a === 0) {
        invalidCallback();
        return null;
    }

    const D = b * b - 4 * a * c;
    if (D < 0) {
        return {
            D: D,
            x1: null,
            x2: null,
        };
    }
    else if (D === 0) {
        const x1 = -b / (2 * a);
        return {
            D: D,
            x1: x1,
            x2: null,
        };
    }
    else {
        const sqrtD = Math.sqrt(D);
        const x2 = (-b + sqrtD) / (2 * a);
        const x3 = (-b - sqrtD) / (2 * a);

        return {
            D: D,
            x1: null,
            x2: x2,
            x3: x3,
        };
    }
}

function showTheResults(results) {

    if (results === null) {
        return;
    }

    if (results.D < 0) {
        alert("Рівняння не має рішень");
        return;
    }

    if (results.D === 0) {
        alert("Єдиний корень рівняння: " + results.x1);
        return;
    }

    alert(
        "D > 0, корені рівняння: x1= " +
        results.x2 +
        ", x2=" +
        results.x3
    );
}

function invalidCallback() {
    alert("a = 0, функція не має рішень");
}

