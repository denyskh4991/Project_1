function askForNumbers() {
    let a = null;
    let b = null;
    let c = null;

    while (a === null || isNaN(a)) {
        a = parseFloat(prompt("Enter a"));
        if (a === null) {
            console.log("I'm sorry to hear that. Hope to see you again");
            return;
        }
    }

    while (b === null || isNaN(b)) {
        b = parseFloat(prompt("Enter b"));
        if (b === null) {
            console.log("I'm sorry to hear that. Hope to see you again");
            return;
        }
    }

    while (c === null || isNaN(c)) {
        c = parseFloat(prompt("Enter c"));
        if (c === null) {
            console.log("I'm sorry to hear that. Hope to see you again");
            return;
        }
    }

    console.log(a, b, c);
    quadraticEquation(a, b, c);
}

askForNumbers();

function quadraticEquation (a, b, c) {
    let D = b * b - 4 * a * c;
    if (D<0){
        console.log("The equation has no solutions");
        return;
    }
    if (D==0) {
        let x1 = -b / (2 * a);
        console.log("The only root of the equation ",x1);
        return;
    }
    if (D>0) {
        let x2 = (-b + Math.sqrt(D))/(2 * a);
        let x3 = (-b - Math.sqrt(D))/(2 * a);
        console.log("The roots of the equation: ",x2, x3);
        return;
    }
}