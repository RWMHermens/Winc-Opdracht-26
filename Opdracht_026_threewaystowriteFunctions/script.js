// Function declaration

function endResult1(number1, number2) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const sum1 = square1 + square2;
    const square3 = sum1 * sum1;
    return square3;
}

console.log(endResult1(2, 3));


// Function expression

const endResult2 = function (num1, num2) {
    const multi1 = num1 * num1;
    const multi2 = num2 * num2;
    const add1 = multi1 + multi2;
    const multi3 = add1 * add1;
    return multi3;
};

console.log(endResult2(2, 3));


// Arrow functions

const endResult3 = (n1, n2) => {
    const sq1 = n1 * n1;
    const sq2 = n2 * n2;
    const sum2 = sq1 + sq2;
    const sq3 = sum2 * sum2;
    return sq3;
};

console.log(endResult3(2, 3));

const test = endResult2(4, 5);
console.log(test);