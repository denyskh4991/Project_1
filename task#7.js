function askForNumbers() {
    let a = null;
    let b = null;
    let c = null;

    const inputA = prompt(
        "Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0\nВведіть a"
    );

    if (inputA === null) {
        return;
    } else if (!isNaN(inputA)) {
        a = parseFloat(inputA);
    }

    while (a === null || isNaN(a)) {
        const inputA1 = prompt("Введіть a");
        if (inputA1 === null) {
            return;
        }

        a = parseFloat(inputA1);
    }

    while (b === null || isNaN(b)) {
        const inputB = prompt("a=" + a + "\nВведіть b");
        if (inputB === null) {
            return;
        }

        b = parseFloat(inputB);
    }

    while (c === null || isNaN(c)) {
        const inputC = prompt("a=" + a + ", b=" + b + "\nВведіть c");
        if (inputC === null) {
            return;
        }

        c = parseFloat(inputC);
    }

    const results = quadraticEquation(a, b, c, invalidCallback);
    showTheResults(a, b, c, results);
}

askForNumbers();

function quadraticEquation(a, b, c, invalidCallback) {
    if (a === null || b === null || c === null) {
        return null;
    }

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

function showTheResults(a, b, c, results) {
    if (a === null || b === null || c === null || results === null) {
        alert("Рівняння не має рішень");
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
    return;
}

function invalidCallback() {
    alert("Рівняння не має рішень");
}

