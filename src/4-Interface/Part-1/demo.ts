interface Person {
    readonly id: number,
    name: string,
    contactNumber: string,
    age: number,
    alternateContact?: string
}

const person: Person = {
    name: 'Karthik',
    age: 24,
    contactNumber: '5645465',
    id: 122
}

console.log(person);







