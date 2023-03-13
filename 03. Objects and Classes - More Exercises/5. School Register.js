function school(input) {
    let students = []
    for (const el of input) {
        let data = el.split(` `)
        let name = data[2].slice(0,-1)
        let grade = Number(data[4].split('').slice(0,-1).join('')) + 1
        let averageScore = Number(data[10])
        if (Number(averageScore) >= 3) {
            students.push({name, grade, averageScore})
        }
    }
    let graded = students.sort((a, b) => a[`grade`]- b[`grade`])
    let grade = graded[0][`grade`]
    let currentGrade = []
    let averageGradeScore = 0
    console.log(`${grade} Grade`)
    for (const student of graded) {

        if (grade !== student[`grade`]) {
            grade = student[`grade`]
            console.log()
            console.log(`${grade} Grade`)
            console.log(`List of students: ${currentGrade.join(', ')}`)
            console.log(`Average annual score from last year: ${(averageGradeScore / currentGrade.length).toFixed(2)}`)
            currentGrade = []
            averageGradeScore = 0
        }
        if (grade === student[`grade`]) {
            currentGrade.push(student[`name`])
            averageGradeScore += student[`averageScore`]
        }
    }
}

// school([
//         "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ]
// )
school([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
)