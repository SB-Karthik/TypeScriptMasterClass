import { Employee } from "./Employee.js";

export class Developer extends Employee {
    private _language: string[];


    constructor(id: number, name: string, salary: number, language: string[]) {
        super(id, name, salary)
        this._language = language;

    }


    public get language(): string[] {
        return this._language
    }

    public set language(language: string[]) {
        this._language = language;
    }

    printDetails(): void {
        super.printDetails()
        console.log(`Language:`, this._language);

    }

    public calaculateBonus(): number {
        return this.salary * 0.3
    }

}



