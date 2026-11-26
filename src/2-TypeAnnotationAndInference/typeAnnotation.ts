
let name: string
name = 'Jatin'

// Type basically talks about the ehat kind of value the variable can store
// So with string we can store only string values not any other values 

// name = 20;

/*
 Data Types
1. string
2. Number
3. Boolean
4. null
5. undefined
6. BigInt
7. Symbol
8. Object
9. Any
10. Array
11. Tuple
12. Enum
13. Void


*/

// Type annotation means we have to explicitly specify the type of the value
function add(num1: number, num2: number): number {
    return num1 + num2;
}

let x = add(10, 20);

// add('jatin', 10)


const user1: { name: string } = {
    name: 'Jatin'
}


// ---------------------------
//          TYPE ALIASES
// ---------------------------
type User = {
    name: string,
    id: number,
    age: number,
    company: string
}

// for object
const user: User = {
    name: 'Jatin',
    id: 1,
    age: 28,
    company: 'TCS'
}

