let a = 10;
let b = 10;
let operator = "-"
let result
switch (operator) {
    case "+":
        result = a + b;
        break;
    case "*":
        result = a * b;
        break;
    case "-":
        result = a - b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        result = " invalid operator";

}
console.log(result);

