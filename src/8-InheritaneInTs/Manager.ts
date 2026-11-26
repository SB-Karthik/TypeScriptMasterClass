import { Employee } from "./Employee.js";

export class Manager extends Employee {

    private _teamSize: number


    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary)
        this._teamSize = teamSize;
    }



    public get teamSize(): number {
        return this._teamSize
    }

    public set teamSize(teamSize: number) {
        this._teamSize = teamSize;
    }

    printDetails(): void {
        super.printDetails()
        console.log(`Team Size:`, this._teamSize);

    }

    calaculateBonus(): number {
        return this.salary * 0.5;
    }

}