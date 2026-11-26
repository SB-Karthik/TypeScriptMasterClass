
type Calculator = (numOne: number, numTwo: number) => number

const add = function (num1: number, num2: number): number {
    return num1 + num2;
}

// use this instead of above function
const addition: Calculator = (num1, num2) => num1 + num2
const result = addition(10, 20)
console.log(result);




