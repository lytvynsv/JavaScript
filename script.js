const firstNumber = prompt('Enter first number')
const secondNumber = prompt('Enter second number')

if(firstNumber === '' || secondNumber === '') {
    alert("Oops! Something went wrong.");
}

if(firstNumber < secondNumber) {
alert("Are you sure you want to continue?");
}

alert("Difference is" + " " + (firstNumber - secondNumber));

if(secondNumber > 0) {
    alert("Quotient is" + " " + (firstNumber / secondNumber));
} else if (secondNumber == 0) {
    alert("Undefined");
}

alert("Sum is" + " " + (Number(firstNumber) + Number(secondNumber)))
alert("Product is" + " " + (firstNumber * secondNumber))

