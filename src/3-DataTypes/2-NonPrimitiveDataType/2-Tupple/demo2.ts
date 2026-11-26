
//How to create Optional element -> ?
let empInfo: readonly [name: string, id?: number] = ['Jatin']
let empInfo2: readonly [string, number?] = ['Jatin']

//Rest of Element 
let empInfo3: readonly [string, number, ...string[], number] = ['Jatin', 111, 'TS', 'React', 'Node', 222]  // Here this is not allowed in typescript

console.log(empInfo3[0]);
console.log(empInfo3[1]);
console.log(empInfo3[2]);
console.log(empInfo3[3]);
console.log(empInfo3[4]);
console.log(empInfo3[5]);

// Destructuring of Tuple
let [empId, empName, skill1, skill2, skill3, num] = empInfo3

console.log(empId);
console.log(empName);
console.log(skill1);
console.log(skill2);
console.log(skill3);
console.log(num);


