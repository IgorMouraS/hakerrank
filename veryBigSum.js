function aVeryBigSum(ar) {
    let sum = ar.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);

    return sum;
}

const teste = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
console.log(teste);