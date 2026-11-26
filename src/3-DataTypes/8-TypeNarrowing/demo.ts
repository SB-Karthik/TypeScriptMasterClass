
function formatEmpId(id: string | number) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }

    else {
        console.log(`EMP${id}`);
    }
}

formatEmpId('emp1010')
formatEmpId(4545)


