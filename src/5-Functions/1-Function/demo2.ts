// never

function throwFailure(message: string): never {
    throw new Error(message)
}

try {
    throwFailure('Something Went Wrong!!!')
}
catch (error: any) {
    console.log(error.message);

}