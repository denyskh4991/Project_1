function generateList(array) {
    let html = '<ul>';

    array.forEach(item => {
        html += '<li>';
        if (Array.isArray(item)) {
            html += generateList(item);
        } else {
            html += item;
        }
        html += '</li>';
    });

    html += '</ul>';
    return html;
}

const inputArray = [1, 2, [1.1, 1.2, 1.3], 3];
const resultHTML = generateList(inputArray);

console.log(resultHTML);