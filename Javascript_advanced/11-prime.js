function countPrimeNumbers() {

    let count = 0;
    let primeNumber;

    for(let i = 2; i <= 100; i++) {
        primeNumber = true;
        for(let diviseur = 2; diviseur < i; diviseur++) {
            if(i % diviseur === 0) {
                primeNumber = false;
                break;
            };
        };
        if(primeNumber) {
            count += 1;
        }
    }
    return count;
}


function hundredTimes() {
    for(let countusefonction = 0; countusefonction <= 100; countusefonction++) {
        countPrimeNumbers();
    };
}

const t0 = performance.now();
setTimeout(hundredTimes, 0)
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
