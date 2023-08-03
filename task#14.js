function generateKey(length, characters){
    const charactersLength = characters.length;
    let randomString = "";
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * charactersLength);
        randomString += characters[index];
    }

    return randomString;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);