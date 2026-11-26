
//HeteroGenous Array
let empData: (string | number | boolean)[] = ['Jatin', 101, true]
empData[0] = 191;
// HomoGenous Array
let empId = [101, 102]

//Tuple
let empInfo: [name: string, id: number, salary: number, isActive: boolean] = ['Jatin', 101, 12000, true]

// empInfo[0] = 101

//Tuple has fixed structure. READONLY OPERATOR CAN BE USED HERE
let empInfo2: readonly [name: string, id: number] = ['Karthi', 101]
console.log(empInfo2[0]);
console.log(empInfo2[1]);



// let empInfo3: [name: string, id: number] = ['Karthi', 101, true]



