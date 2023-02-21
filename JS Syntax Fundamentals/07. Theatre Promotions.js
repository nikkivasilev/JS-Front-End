function solve(day, age) {   
    let result;
    if (day === 'Weekday') {
        if (age > 18 && age <= 64) {
            result = '18$';
        } else {
            result = '12$';
        }
    }
    if (day === 'Weekend') {
        if (age > 18 && age < 64) {
            result = '20$';
        } else {
            result = '15$';
        }
    }
    if (day === 'Holiday') {
        if (age > 0 && age <= 18) {
            result = '5$'
        }
        if (age > 18 && age < 64) {
            result = '18$'
        } 
        if (age >= 64) {
            result = '10$'
        }
    }
    if (age < 0 || age > 122) {
        result = `Error!`; 
     }

     console.log(result);

}
