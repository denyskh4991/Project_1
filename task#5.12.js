for (i = 1; i <= 10; i++){
    let str = '';
    for (j = 1; j <= 10; j++){
        if (j !== 10){
            str += i * j + '; ';
        }
        else {
            str += i * j;
        }
    }
    console.log(str);
}