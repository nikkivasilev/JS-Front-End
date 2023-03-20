function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector(`textarea`).value)
        let restaurants = []
        input.forEach((data) => {
            let [name, employees] = data.split(' - ')
            let restaurant = {}
            let averageSalary = 0
            let bestSalary = 0
            let splitEmployees = []
            employees.split(`, `).forEach(employee => {
                let [employeeName, salary] = employee.split(' ')
                salary = Number(salary)
                splitEmployees.push({name: employeeName, salary})
                averageSalary += salary
                if (salary > bestSalary) {
                    bestSalary = salary
                }
            })
            splitEmployees.sort((a, b) => {
                return b[`salary`] - a[`salary`]
            })
            averageSalary = (averageSalary / splitEmployees.length).toFixed(2)
            restaurant = {name, averageSalary, bestSalary, splitEmployees}
            restaurants.push(restaurant)
        })
        restaurants.sort((a, b) => {
            return Number(b[`averageSalary`]) - Number(a[`averageSalary`])
        })
        let bestRestaurant = restaurants[0]
        let restaurantResult = `Name: ${bestRestaurant[`name`]} Average Salary: ${Number(bestRestaurant[`averageSalary`]).toFixed(2)} Best Salary: ${bestRestaurant[`bestSalary`].toFixed(2)}`
        let restaurantField = document.querySelector(`#bestRestaurant > p`)
        restaurantField.textContent = restaurantResult
        let employeeField = document.querySelector(`#workers > p`)
        let employeeResult = []
        bestRestaurant[`splitEmployees`].forEach((employee) => {
            employeeResult.push(`Name: ${employee[`name`]} With Salary: ${employee[`salary`]}`)
        })
        employeeField.textContent = employeeResult.join(' ')

    }
}

