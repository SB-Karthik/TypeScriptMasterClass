function add(n1: number, n2: number): number

function add(s1: string, s2: string): string

// Implementation

function add(a: number | string, b: number | string): number | string | never {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    }
    else {
        throw new Error('Invalid Parameter Type')
    }
}

const total: number = add(10, 20);
const result: string = add("Karthik", ' S B')

console.log(total);
console.log(result);
