//Use Array as a type as well as a Parameter

console.log("Array as a Parameter");

const empId: number[] = [101, 102, 103, 104, 105]

function displayEmpData(arr: number[]) {
    arr.forEach(data => console.log(data))
}

displayEmpData(empId)

console.log('Array as a return Type');

function getEmpIds(): number[] {
    const empsId: number[] = [501, 502, 503]
    return empsId;
}

const x = getEmpIds();
console.log('Emp Ids = ', x);


