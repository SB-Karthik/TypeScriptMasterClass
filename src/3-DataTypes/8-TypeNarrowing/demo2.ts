function printEmpName(name: string | null) {
    if (name != null && typeof name === 'string') {
        console.log(name)
    }
    else {
        console.log('Name is null');

    }
}

printEmpName('Jatin')
printEmpName(null)


function printToken(token: string | undefined) {
    if (token != undefined) {
        console.log(token);

    }
    else {
        console.log('Token is undefined');

    }
}

let token1 = '1234'
let token2 = undefined

printToken(token1)
printToken(token2)

