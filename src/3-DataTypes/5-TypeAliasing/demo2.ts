
type address = {
    city: string,
    state: string,
    country: string,
    pin: number
}

type Employee = {
    name: string,
    readonly id: number,
    address: address
}


const emp1: Employee = {
    name: 'Jatin',
    id: 1,
    address: {
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        pin: 110001
    }
}

