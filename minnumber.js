const arr1 = [
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
];

let minNumber = arr1[0]; 

for (let elem of arr1){
    if (elem < minNumber && typeof elem === 'number' ) {
        minNumber = elem;
    }
}

console.log(minNumber);