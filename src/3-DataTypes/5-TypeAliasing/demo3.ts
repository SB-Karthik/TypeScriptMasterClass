// Type Aliasing for function Parameter and signature

type Calculator = (a: number, b: number) => number

function add(a: number, b: number): number {
    return a + b;
}



const addition: Calculator = (a, b) => a + b;

const multiplication: Calculator = (a, b) => a * b;




