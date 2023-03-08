function getMinNumber (num) {
    let minNumber = num [0];
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] === "number") {
            if (num[i] < minNumber){
                minNumber = num [i];
            }
        }
    };
    return minNumber;
}

function getMaxNumber (num) {
    let maxNumber = num[0];
    for (let i = 0; i < num.length; i++){
        if (typeof num[i] === "number") {
            if (num[i] > maxNumber){
                maxNumber = num[i];
            }
        }
    };
    return maxNumber;
}

const num = [
    27, 
    28,
    29,
    30,
    31,
    'Error',
    33,
    34,
    35,
    'Error36',
];

const minNumber = getMinNumber (num);
const maxNumber = getMaxNumber (num);

alert('Min number is ' +  minNumber);
alert('Max number is ' + maxNumber);