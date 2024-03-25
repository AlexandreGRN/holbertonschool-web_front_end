function countPrimeNumbers(){
    const t0 = performance.now();
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }
    const t1 = performance.now();

    console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
}

countPrimeNumbers();
