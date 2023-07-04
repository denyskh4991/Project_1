function askForNumbers() {

    let a = null;
    let b = null;
    let c = null;

    while (a === null || isNaN(a)) {
        const inputA = prompt("Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0\nВведіть a");
        if (inputA === null) {
            alert('Шкода. Сподіваюсь ще побачитись');
            return;
        }
        a = parseFloat(inputA);
    }

    while (b === null || isNaN(b)) {
        const inputB = prompt("a="+a+"\nВведіть b");
        if (inputB === null) {
            alert('Шкода. Сподіваюсь ще побачитись');
            return;
        }
        b = parseFloat(inputB);
    }

    while (c === null || isNaN(c)) {
        const inputC = prompt("a="+a+", b="+b+"\nВведіть c");
        if (inputC === null) {
            alert('Шкода. Сподіваюсь ще побачитись');
            return;
        }
        c = parseFloat(inputC);
    }

    quadraticEquation(a, b, c);
}

askForNumbers();

function quadraticEquation (a, b, c) {
    let D = b * b - 4 * a * c;
    if (a==0){
        alert("Рівняння не має рішень");
        return;
    }
    if (D<0){
        alert("Рівняння не має рішень");
        return;
    }
    if (D==0) {
        let x1 = -b / (2 * a);
        alert("Єдиний корень рівняння: "+x1+"");
        return;
    }
    if (D>0) {
        let x2 = (-b + Math.sqrt(D))/(2 * a);
        let x3 = (-b - Math.sqrt(D))/(2 * a);
        alert("Корені рівняння: "+x2+", "+x3+"");
        return;
    }
}
