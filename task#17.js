const phoneNumbers = ['380 44 364 83 65', '+380 44 364 83 65', '380-44-364-83-65', '+380-44-364-83-65', '+380443648365'];

const results = phoneNumbers.map(str => {
    const phoneRegex = /^(\+380|380)( |-)\d{2}( |-)\d{3}( |-)\d{2}( |-)\d{2}$/;
    if (phoneRegex.test(str)) {
        const numberParts = str.match(/\d+/g);
        const number = numberParts.join('').replace(/^(\+?380|380)/, '0');
        return number;
    } else {
        return null;
    }
});

console.log(results);