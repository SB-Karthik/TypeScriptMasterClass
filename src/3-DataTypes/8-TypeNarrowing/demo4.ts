
type Employee = { name: string }
type Admin = { name: string, permissions: string[] }

let emp: Employee = { name: 'Jatin' }

let admin: Admin = { name: 'Raj', permissions: ['Read', 'Write'] }


function printUserInfo(user: Employee | Admin) {
    if ('permissions' in user) {
        console.log(user.name);
        console.log(user.permissions);
    } else {
        console.log(user.name);
    }
}

printUserInfo(emp)
printUserInfo(admin)



