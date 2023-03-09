function employees(input) {
    class employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length
         }
    }
    let employeesArray = []
    for (const name of input) {
        employeesArray.push(new employee(name))
    }
    for (const employee of employeesArray) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}