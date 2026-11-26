// Enum are used to define a set of named constants

enum Role {
    admin = 'ADMIN',
    tester = 'TESTER',
    developer = 'DEVELOPER'
}

let roleName: Role = Role.admin
console.log(roleName)
console.log(typeof roleName);
console.log(Role);


