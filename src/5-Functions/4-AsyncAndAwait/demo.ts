async function demo(): Promise<string> {
    return 'Hello'
}

let result = await demo();
console.log(result);

async function getUserName(): Promise<string> {
    return 'Jatin'
}

async function getUserId(): Promise<number> {
    return 101
}

interface Employee {
    name: string,
    id: number,
    role: string
}

async function getEmployee(): Promise<Employee> {
    const emp: Employee = {
        name: 'Jatin',
        id: 101,
        role: 'Admin'
    }
    return emp  // promise is resolved with employee data
}

const empData: Employee = await getEmployee()
console.log(empData);

async function getAllEmployee(): Promise<Employee[]> {
    const emp: Employee[] = [{
        name: 'Jatin',
        id: 101,
        role: 'QA'
    },
    {
        name: 'Rajesh',
        id: 102,
        role: 'Team Lead'
    },
    {
        name: 'Karthik',
        id: 111,
        role: 'Admin'
    }]
    return emp  // promise is resolved with employee data
}

const allEmpData: Employee[] = await getAllEmployee()
console.log(allEmpData);

