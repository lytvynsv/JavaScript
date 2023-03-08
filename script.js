function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Number(a) + Number(b); 
    }
}
alert(addNumbers(27, 36));
  
function subtractNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Number(a) - Number(b);
    }
}
alert(subtractNumbers(28, 35))

function multiplyNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Number(a) * Number(b);
    }
}
alert(multiplyNumbers(29, 34))

function divideNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Number(a) / Number(b);
    }
    if (b === 0) {
      return 'Error';
    }
}
alert(divideNumbers(30, 33))