// ? TypeScript has 7 Primitive Data Types
/* 
1. string - 
2. number
3. boolean
4. symbol
5. bigint

*/

let empName: string = `Jatin`  // Type Annotation
empName = empName + ` Sharma`

// Type inference
let empAddress =
    `${empName}
    123 Main St
    Bangalore
    Karnataka`

console.log(empName);
console.log(empAddress);




let empIdNumber: number = 30

let empSalary: number = 50000

let isEmployeeActive: boolean = true
if (isEmployeeActive) {
    console.log(`${empName} is Active`);

} else {
    console.log(`${empName} is Not Active`);

}

let empId: symbol = Symbol(empIdNumber)
console.log('Employee ID is ', empId);



let empId2: symbol = Symbol(empIdNumber)
console.log('Employee ID 2 is ', empId2);

if (empId === empId2) {
    console.log('Symbols are Equal');
}
else {
    console.log('Symbols are Not Equal');
}
