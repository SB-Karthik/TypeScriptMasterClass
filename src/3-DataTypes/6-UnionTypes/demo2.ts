// Union type as parameter

function getEmpInfo(empId: string | number) {
    console.log('Finding the Emp Info');

}

getEmpInfo("EMP101")
getEmpInfo(123)


// Invalid
// getEmpInfo(true)

console.log('-'.repeat(20));



// for return type 

function getEmpName(empId: number | string): string | null {
    if (empId === 101) {
        return 'Jatin'
    }
    else {
        return null;
    }
}

const result = getEmpName(101)
console.log(result)

let result2 = getEmpName('EMP101')
console.log(result2?.toLowerCase()) // undefined


