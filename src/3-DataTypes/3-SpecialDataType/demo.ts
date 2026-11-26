/*
Special DataType
1. null -> Intentionally assigned value
2. Undefined -> Created value is not assigned to the variable
3. any -> Rejecting the type safety feature in TS (very bad to use) 
4. Unknown -> don't know the type value but need to store the value (it won't skip the type safety)
5. Void -> Does not return any value! function[return type is void]
6. never -> used on function. Inducates that function will never work normally or return any value

*/

let managerId: number | null = null;
console.log(managerId);

managerId = 105
console.log('The manager id is ', managerId);


let employeeExitDate: string | null;
employeeExitDate = null
console.log('The employee exit date is', employeeExitDate);


let employeeContactNumber: undefined | string;
console.log('The employee contact number is', employeeContactNumber);

let x: any;
x = 110;
x = 'jatin'
x = true
x = { name: 'Jatin' }


// Unknown
// explicit type checking of typeScript check using typeOf

let empData: unknown;

empData = 'Jatin';
empData = 100;
// empData = true

// explicit type checking

if (typeof empData === 'string') {
    console.log(empData.toUpperCase());
}
else if (typeof empData === 'number') {
    console.log(empData * 2);
}

// void no returnType
function printEmpInfo(): void {
    console.log('Emp Info');
    console.log(empData);
    console.log(employeeContactNumber);
    console.log(employeeExitDate);
    console.log(managerId);
}

printEmpInfo();

//never
function throwEmpError(): never {
    throw new Error('Emp Data Not Found!!')
}
