function diagonalDifference(arr) {
    let diagonalLeft = 0;
    let diagonalRigth = 0;
    for(let i=0 ; arr.length > i; i++){
        diagonalLeft += arr[i][i];
        diagonalRigth += arr[i][arr.length - i - 1];
    }

    let difference = 0;
    if(diagonalLeft > diagonalRigth){
        difference = diagonalLeft - diagonalRigth;
    } else{
        difference = diagonalRigth - diagonalLeft;
    }

    return difference;

}

const teste = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
console.log(teste);