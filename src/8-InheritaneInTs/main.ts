import { Developer } from "./Developer.js";
import { Employee } from "./Employee.js";
import { Manager } from "./Manager.js";


const dev = new Developer(101, 'Jatin', 80000, ["TS", "JS", "Python", 'Java'])
console.log(dev);

// dev.id=100


const manager = new Manager(111, 'Raj', 100000, 25)
console.log(manager);


console.log(dev instanceof Developer);
console.log(dev instanceof Manager);
console.log(dev instanceof Employee);

console.log('-'.repeat(30));
dev.printDetails();
console.log('-'.repeat(30));


manager.printDetails()

console.log('Developer bonus', dev.calaculateBonus());
console.log('Manager bonus', manager.calaculateBonus());
