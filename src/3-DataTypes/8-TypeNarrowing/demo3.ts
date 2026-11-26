// Literal Type  -> Type Narrowing Check
type TestStatus = 'PASS' | 'FAIL' | 'SKIP'


function testResultHandle(TestStatus: TestStatus) {
    if (TestStatus === 'PASS') {
        console.log("Test case is Passed")
    } else if (TestStatus === 'FAIL') {
        console.log("Test case is Failed")
    } else {
        console.log("Test case is Skipped")
    }
}

testResultHandle('PASS')
testResultHandle('FAIL')
testResultHandle('SKIP')
// Invalid
// testResultHandl(16)


