function meetingsSchedule(meetings) {
    let successful = {}
    for (const meeting of meetings) {
        let [day, name] = meeting.split(' ')
        if (successful.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            console.log(`Scheduled for ${day}`)
            successful[day] = name
        }

    }
    for (const [key, value] of Object.entries(successful)) {
        console.log(`${key} -> ${value}`)
    }

}

meetingsSchedule(['Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George'])