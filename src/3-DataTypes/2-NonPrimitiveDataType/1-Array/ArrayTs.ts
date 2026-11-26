// Create array that stores Employee name
// JS --> Array is an Object


let empNames: string[] = ['Jatin', 'Sam', 'Neel']
empNames.push('Karthi')
// empNames.push(101) // error

empNames.forEach((name) => {
    console.log(name.toUpperCase());

})


// remove an element from the Array
let data: string | undefined = empNames.pop()
console.log(data);

// How to create a number, boolean array 

let empIds: number[] = [101, 102, 103]
let activeStatus: boolean[] = [true, false, true]

empIds.forEach((id) => {
    console.log("Employ Id", id);
})

activeStatus.forEach((status) => {
    console.log("Employ Status", status);
})

