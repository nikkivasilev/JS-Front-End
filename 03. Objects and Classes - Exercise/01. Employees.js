function employees(input) {
    class employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length
         }
    }
    let employeesArray = input.reduce((data, name) => {
        data.push(new employee(name))
        return data
    }, [])
    for (const employee of employeesArray) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])

