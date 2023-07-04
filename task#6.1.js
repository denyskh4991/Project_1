let str1 = '';

for (let i = 20; i <= 30; i+=0.5) {
    str1 += i;

    if (i !== 30) {
        str1 += ' ';
    }
}

console.log(str1);