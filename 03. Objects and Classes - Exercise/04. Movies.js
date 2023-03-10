function movies(input) {
    let moviesArray = []

    for (const data of input) {
        let dataExplode = data.split(' ')

        if (dataExplode[0] ===  `addMovie`) {
            let name = dataExplode.slice(1).join(' ')
            moviesArray.push({name})
        } else if (data.includes(`directedBy`)) {
            let index = data.indexOf(`directedBy`)
            let currentName = data.slice(0, index - 1)
            let director = data.slice(index + 11, (data.length))
            let movie = moviesArray.find((m) => m.name === currentName)
                if (movie) {
                    movie[`director`] = director
                }
        } else if (data.includes(`onDate`)) {
            let index = data.indexOf(`onDate`)
            let currentName = data.slice(0, index - 1)
            let date = data.slice(index + 7, (data.length))
            let movie = moviesArray.find((m) => m.name === currentName)
                if (movie) {
                    movie[`date`] = date
                }

        }
    }
    for (const movie of moviesArray) {
        if (Object.keys(movie).length === 3) {
        console.log(JSON.stringify(movie))
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])

movies([`addMovie The Avengers`,
    `addMovie Superman`,
    `The Avengers directedBy Anthony Russo`,
    `The Avengers onDate 30.07.2010`,
    `Captain America onDate 30.07.2010`,
    `Captain America directedBy Joe Russo`])