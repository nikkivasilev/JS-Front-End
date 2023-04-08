
function solve(input) {
    let n = Number(input.shift())
    let sprintBoard = {}
    let initialState = input.slice(0, n)
    initialState.forEach((el) => {
        let [assignee, taskId, title, status, estimatedPoints] = el.split(`:`)
        if (!sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee] = {}
        }

        sprintBoard[assignee][taskId] = {title, status, estimatedPoints}

    })
    input = input.slice(n)
    input.forEach((command) => {
        let [action, ...data] = command.split(':')
        if (action === `Add New`) {
            let [assignee, taskId, title, status, estimatedPoints] = data
            if (sprintBoard.hasOwnProperty(assignee)) {
                sprintBoard[assignee][taskId] = {title, status, estimatedPoints}

            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`)

            }
        } else if (action === `Change Status`) {
            let [assignee, taskId, newStatus] = data
            if (sprintBoard.hasOwnProperty(assignee)) {
                let tasks = sprintBoard[assignee]
                if (tasks.hasOwnProperty(taskId)) {
                    sprintBoard[assignee][taskId].status = newStatus
                } else {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }
        } else if (action === `Remove Task`) {
            let [assignee, index] = data

            if (sprintBoard.hasOwnProperty(assignee)) {
                let taskKeys = Object.keys(sprintBoard[assignee])
                if (taskKeys.length > index) {
                    let taskKey = taskKeys[index]
                    delete sprintBoard[assignee][taskKey]
                } else {
                    console.log(`Index is out of range!`)
                }

            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`)

            }
        }
    })
    let allPoints = {
        toDo: 0,
        inProgress: 0,
        codeReview: 0,
        done: 0,
    }
    Object.values(sprintBoard).forEach((el) => {
        Object.values(el).forEach((element) => {
            if (element.status === `ToDo`) {
                allPoints.toDo += Number(element.estimatedPoints)
            } else if (element.status === 'In Progress') {
                allPoints.inProgress += Number(element.estimatedPoints)
            } else if (element.status === 'Code Review') {
                allPoints.codeReview += Number(element.estimatedPoints)
            } else if (element.status === 'Done') {
                allPoints.done += Number(element.estimatedPoints)
            }
        })
    })
    console.log(`ToDo: ${allPoints.toDo}pts`)
    console.log(`In Progress: ${allPoints.inProgress}pts`)
    console.log(`Code Review: ${allPoints.codeReview}pts`)
    console.log(`Done Points: ${allPoints.done}pts`)

    let sumOfPts = allPoints.toDo + allPoints.inProgress + allPoints.codeReview

    if (sumOfPts <= allPoints.done) {
        console.log(`Sprint was successful!`)
    } else {
        console.log(`Sprint was unsuccessful...`)
    }
    for (let i = 10; i > 3; i -= 2) {
        console.log(i)
    }
}


// solve([
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]
// )


solve([
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)