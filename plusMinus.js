function plusMinus(arr) {
    for(let a of arr){
        a /= arr.length;
    }
    return arr;
}

const teste = plusMinus([1, 1, 0, -1, -1]);
console.log(teste);