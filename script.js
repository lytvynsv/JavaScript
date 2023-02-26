const firstNumber = prompt('Enter first number')
const secondNumber = prompt('Enter second number')

if ((firstNumber == null || firstNumber == "") || (secondNumber == null || secondNumber == "")) {
    alert ("Oops! Something went wrong.");
} else if (secondNumber == 0) {
    alert ("Undefined");
    alert ("Sum is" + " " + (Number(firstNumber) + Number(secondNumber)));
    alert ("Product is" + " " + (firstNumber * secondNumber));
    alert ("Difference is" + " " + (firstNumber - secondNumber));
} else if (firstNumber < secondNumber) {
    let desicion = confirm ('Are you sure you want to continue?');
    if (desicion == true) {
    alert ("Difference is" + " " + (firstNumber - secondNumber));
    alert ("Sum is" + " " + (Number(firstNumber) + Number(secondNumber)));
    alert ("Product is" + " " + (firstNumber * secondNumber));
    alert ("Quotient is" + " " + (firstNumber / secondNumber));
} else {
    alert ("Sum is" + " " + (Number(firstNumber) + Number(secondNumber)));
    alert ("Product is" + " " + (firstNumber * secondNumber));
    alert ("Quotient is" + " " + (firstNumber / secondNumber));
    }
} else {
    alert ("Sum is" + " " + (Number(firstNumber) + Number(secondNumber)));
    alert ("Product is" + " " + (firstNumber * secondNumber));
    alert ("Difference is" + " " + (firstNumber - secondNumber));
    alert ("Quotient is" + " " + (firstNumber / secondNumber));
}