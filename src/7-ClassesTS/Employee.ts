export class Employee {
    // Instance Property
    private _id: number;  // for private us _ start
    private _name: string
    private _salary: number

    constructor(id: number, name: string, salary: number) {
        this._id = id;
        this._name = name;
        this._salary = salary
    }

    setId(id: number) {
        this._id = id
    }
    getId() {
        return this._id
    }

    setName(name: string) {
        this._name = name
    }
    getName() {
        return this._name
    }
    setSalary(salary: number) {
        this._salary = salary
    }
    getSalary() {
        return this._salary
    }


    public set id(id: number) {
        this._id = id;
    }


    public get id(): number {
        return this._id
    }



    printDetails(): void {
        console.log('Employee Info');
        console.log(`Employee Name :- ${this._name}`);
        console.log(`Employee ID :- ${this._id}`);
        console.log(`Employee Salary :- ${this._salary}`);
    }

    calculateAnnualSalary(): number {
        return this._salary * 12
    }
}