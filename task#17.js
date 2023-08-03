const phoneNumbers = ['380 44 364 83 65', '+380 44 364 83 65', '380-44-364-83-65', '+380-44-364-83-65'];

const results = phoneNumbers.map(str => {
    const phoneRegex = /^(\+380|380)( |-)\d{2}( |-)\d{3}( |-)\d{2}( |-)\d{2}$/;
    return phoneRegex.test(str) ? str : null;
});

console.log(results);