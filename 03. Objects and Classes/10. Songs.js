function songs(input) {
    class song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArray = input.slice(1, input.length - 1)
    let command = input.pop()
    let songsClasses = []
    for (const songString of songsArray) {
        let [typeList, name, time] = songString.split('_')
        songsClasses.push(new song(typeList, name, time))
    }
    let result = []
    if (command === `all`) {
        for (const song of songsClasses) {
            result.push(song.name)
        }
    } else {
        for (const song of songsClasses.filter(song => song.typeList === command)) {
            result.push(song.name)
        }
    }
    return result.join(`\n`)
}

console.log(
songs([3,

    'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
)