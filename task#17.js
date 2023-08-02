const phoneNumbers = ['380 44 364 83 65', '+380 44 364 83 65', '380-44-364-83-65', '+380-44-364-83-65'];

const results = phoneNumbers.map(str => {
    const phoneRegex = /^(\+?380\s?)?(\d{2}|\(\d{2}\))\s?\d{3}\s?\d{2}\s?\d{2}$/;
    return phoneRegex.test(str) ? str : null;
});

console.log(results);