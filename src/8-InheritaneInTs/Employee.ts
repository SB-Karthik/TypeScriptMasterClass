
export abstract class Employee {
    private _id: number;
    private _name: string;
    private _salary: number


    constructor(id: number, name: string, salary: number) {
        this._id = id;
        this._name = name;
        this._salary = salary;
    }


    public get id(): number {
        return this._id
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name
    }

    public set name(name: string) {
        this._name = name;
    }

    public get salary(): number {
        return this._salary
    }

    public set salary(salary: number) {
        this._salary = salary;
    }


    // Method Overriding
    //Child class and Parent class has same method sigmature

    printDetails(): void {
        console.log('Employee Information');
        console.log(`Name: ${this.name}`);
        console.log(`Id: ${this.id}`);
        console.log(`Salary: ${this.salary}`);

    }

    public abstract calaculateBonus(): number

}



