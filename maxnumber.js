const arr2 = [
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

let maxNumber = arr2[0];

for (let elem of arr2){
    if(elem > maxNumber && typeof elem === 'number' ){
        maxNumber = elem;
    }
}

console.log(maxNumber);