// Declaration Merging

// Extend

type Department = 'Development' | 'Sales' | 'Marketing'

interface Employee {
    name: string,
    id: number,
    department: Department
}

interface Automationengineer extends Employee {
    tools: string[],
    programmingLanguage: string[]
}

interface salesTeam extends Employee {
    salesData: string[],
    target: number
}

const engineer: Automationengineer = {
    name: "Raj",
    id: 101,
    department: 'Development',
    tools: ["selenium", "Playwright", "API Testing", "JMeter"],
    programmingLanguage: ["Java", "Python", "TypeScript", "JavaScript"]
}


const sales: salesTeam = {
    name: "Jatin",
    id: 102,
    department: 'Sales',
    salesData: ["Sales1", "Sales2", "Sales3"],
    target: 100000
}

console.log(engineer);
console.log('-'.repeat(40));

console.log(sales);

