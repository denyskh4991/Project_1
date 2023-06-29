let N = prompt('Enter your number');

if (!isNaN(N) && N % 1=== 0){
    for (i=1; i<=100; i++){
        if (Math.pow(i,2)<N){
            console.log (i)
        }
    }
}

else {N = prompt('Enter your number')}