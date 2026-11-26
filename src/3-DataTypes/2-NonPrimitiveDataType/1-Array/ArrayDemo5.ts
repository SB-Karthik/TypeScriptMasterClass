//How do we create copy of an array

const data: readonly number[] = [101, 102, 103]

// data.push(104)
console.log(data);


const x = data.map(val => val + 5)
console.log(x);

