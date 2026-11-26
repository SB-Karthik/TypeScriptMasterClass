const example1 = function () {
    console.log('Hello');
}

const exa1ArrowFunction = (): void => console.log('Hello')

const example2 = function (name: string) {
    console.log(`Hello ${name}`);
}

const exa2ArrowFunction = (name: string): void => console.log(`Hello ${name}`)


const example3 = function (input: number): number {
    return input * 2
}

const data = example3(100)
console.log(data);

const exa3ArrowFunction = (input: number): number => input * 2

