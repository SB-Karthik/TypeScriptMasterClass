function calculateTotal(...salaries: number[]) {
    // salaries.forEach((salary) => console.log(salary))
    const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0)
    console.log(totalSalary);

}


calculateTotal(100, 200, 300, 400, 500)