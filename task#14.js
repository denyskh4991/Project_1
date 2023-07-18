function generateKey(length, characters){
    let randomString = "";
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        randomString +=characters[index];
    }

    return randomString;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);