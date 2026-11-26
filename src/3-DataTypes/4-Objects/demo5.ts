// Object As a function parameters

function printEmployeeDetails(empdata: { name: string, id: number, salary?: number | string }) {
    let { name, id, salary } = empdata
    console.log("Emp Information")
    console.log(name)
    console.log(id);
    console.log(salary);

}

const e: {
    name: string,
    id: number,
    salary?: string | number

} = {
    name: 'Jatin',
    id: 101,
    salary: 29291
}

printEmployeeDetails(e);


// Object As a Function Return Type

function createEmployee(): {
    name: string,
    id: number,
    salary: number,
    isActive: boolean
} {
    return {
        name: 'Karthi',
        id: 201,
        salary: 29999,
        isActive: true
    }
}

const newEmployee = createEmployee()
console.log(newEmployee.name);
console.log(newEmployee.id);
console.log(newEmployee.salary);
console.log(newEmployee.isActive);


