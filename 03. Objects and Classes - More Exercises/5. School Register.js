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
    let grades = []
    let gradeStudents = []
    let gradeScores = 0
    let lastStudents = []
    let lastGradeScores = 0
    for (const student of graded) {
        if (grade !== student[`grade`]) {
            gradeScores = Number((gradeScores / gradeStudents.length).toFixed(2))
            grades.push({grade, gradeStudents, gradeScores})
            grade = student['grade']
            gradeScores = 0
            gradeStudents = []
            lastStudents = []
            lastGradeScores = 0
        }
        if (grade === student[`grade`]) {
            gradeStudents.push(student[`name`])
            gradeScores += student[`averageScore`]
        }
        lastStudents.push(student[`name`])
        lastGradeScores += student[`averageScore`]

    }
    lastGradeScores = Number((lastGradeScores / lastStudents.length).toFixed(2))
    grades.push({grade, gradeStudents: lastStudents, gradeScores: lastGradeScores})
    let counter = 0
    for (const grade of grades) {
        if (counter !== 0) {
            console.log()
        }
        counter += 1
        console.log(`${grade[`grade`]} Grade`)
        console.log(`List of students: ${grade[`gradeStudents`].join(`, `)}`)
        console.log(`Average annual score from last year: ${grade[`gradeScores`].toFixed(2)}`)
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