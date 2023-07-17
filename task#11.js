function removeElement(array, elemValue) {
    const indexToRemove = array.indexOf(elemValue);

    if (indexToRemove !== -1) {
        array.splice(indexToRemove, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 4);
console.log(array);