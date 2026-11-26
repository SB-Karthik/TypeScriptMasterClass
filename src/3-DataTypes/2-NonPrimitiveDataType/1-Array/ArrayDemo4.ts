//How do we create copy of an array

const data: number[] = [101, 102, 103, 104, 105]
console.log("Original data", data);

const copiedData: number[] = data

const copyData2 = [...data]
data.push(106)


console.log("Copied Data ", copyData2);
console.log(copiedData);



