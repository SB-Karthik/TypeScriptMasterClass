
function calculateSalary(salary: number, bonus: number): number {
    const totalSalary = salary + bonus;
    console.log(`Total Salary ${totalSalary}`);
    return totalSalary
}


const result = calculateSalary(12345, 10000);

console.log(result);


console.log(calculateSalary(10000, 1500));



