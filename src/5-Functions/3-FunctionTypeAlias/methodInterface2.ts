interface EmployeService {
    getEmployee(id: number): string
    deleteEmploye(id: number): boolean
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
    deleteEmploye(id) {
        if (id === 101) {
            console.log('Employee Deleted Successfully!!!');
            return true
        }
        else {
            console.log('Emp Not Found!!!');
            return false
        }
    },
}

console.log(employeeService.getEmployee(101));
console.log(employeeService.getEmployee(202));
console.log(employeeService.getEmployee(123));

console.log(employeeService.deleteEmploye(101));
console.log(employeeService.deleteEmploye(1012));
