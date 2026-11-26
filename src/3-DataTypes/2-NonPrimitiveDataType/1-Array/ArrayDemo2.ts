
let empNames: string[] = ["Karthi", "Raja", "John", "Doe"]
let emp = empNames[20]

console.log(emp?.toUpperCase()); // ! ? Oprtional Chaining [id the value is neither null or undefined]


//Map function --. Perfom an operation on all Vaues/Elemnts which is present in the Array and those indivisual result will be store in another Array

//Map is a Higher order function
const empNamesMapResult: string[] = empNames.map((name) => {
    return name.toUpperCase()
})

console.log(empNames);

console.log(empNamesMapResult);

// filter -> Condition Check -> Those who satisfies the condition will be store in another Array

let empNameSet2: string[] = ['Raj', 'Uday', 'Rohit', 'Kajal', 'Aman', 'Ajith', 'Arun'];

const empSetData2 = empNameSet2.filter(name => {
    return name.startsWith('A')
})

console.log(empSetData2);


//





