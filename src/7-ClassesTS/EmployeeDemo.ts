import { Employee } from "./Employee.js";


const Emp1 = new Employee(101, "Jatin", 53000);
const Emp2 = new Employee(102, "Raj", 45000);
const Emp3 = new Employee(103, "Deepak", 57000);


console.log(Emp1);
Emp1.printDetails();

console.log(`Annual Salary :- `, Emp1.calculateAnnualSalary());

const data = Emp1.getId()
console.log(data);

Emp1.setId(222)
Emp1.id = 111
const x = Emp1.id
console.log(x);

