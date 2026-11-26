interface EmployeService {
    getEmployee(id: number): string
}


const employeeService: EmployeService = {
    getEmployee(id) {
        if (id === 101) {
            return 'Emp Info : Name is Jatin'
        }
        else if (id === 202) {
            return 'Emp Info : Name is Nidhi'
        }
        else {
            return 'Emp Not Found!!!'
        }
    },
}

console.log(employeeService.getEmployee(101));
console.log(employeeService.getEmployee(202));
console.log(employeeService.getEmployee(123));


