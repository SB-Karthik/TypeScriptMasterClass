// Type alias for function Parameter and Return Type

type Employee = {
    name: string,
    id: number,
    email: string
}


function printEmployeeInfo(emp: Employee) {
    console.log('Employee Info');
    console.log(emp.name);
    console.log(emp.id);
    console.log(emp.email);

}


function createEmployee(): Employee {
    const x: Employee = {
        name: 'Jatin',
        id: 101,
        email: 'wehkqedhjiaj@gmail.com'
    }
    return x;
}

console.log(createEmployee());
printEmployeeInfo(createEmployee());

