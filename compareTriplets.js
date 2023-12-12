function compareTriplets(a, b) {
    let arrLengthA = a.length;
    let arrLengthB = b.length;
    let arrLength = 0;

    let alicePoints = 0;
    let BobPoints = 0;

    if (arrLengthA > arrLengthB) {
        arrLength = arrLengthA;
    } else {
        arrLength = arrLengthB;
    }

    for (let i = 0; arrLength > i; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        } else if (a[i] < b[i]) {
            BobPoints++;
        }
    }

    let finalPoints = [alicePoints, BobPoints];

    return finalPoints;
}

const teste = compareTriplets([1, 2, 3], [3, 2, 1]);
console.log(teste);