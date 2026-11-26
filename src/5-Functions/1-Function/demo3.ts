// Optional Parameter

function createEmp(name: string, department?: string) {
    console.log('created Employ');
    console.log(`Name ${name}`);
    if (department !== undefined) {
        console.log(`Department ${department}`);

    }

}
createEmp('John');
createEmp('John', 'HR');
