
//Array of Objects

const name: string[] = ['Jatin', 'Raj', 'Rohit']


const empDataArray: { name: string, id: number, salary: number }[] = [
    { name: 'Jatin', id: 1, salary: 10000 },
    { name: 'Raj', id: 2, salary: 20000 },
    { name: 'Rohit', id: 3, salary: 30000 },
]

console.log(empDataArray[0]?.name)
// console.log(empDataArray[0])

empDataArray.push({ name: 'Ram', id: 111, salary: 50000 })

empDataArray.forEach(data => console.log(data))


const filteredData = empDataArray.filter(data => data.salary > 20000)
console.log(filteredData)