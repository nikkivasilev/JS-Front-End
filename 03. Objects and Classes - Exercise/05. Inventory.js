function inventory(heroes) {
    let heroesArray = []
    for (const hero of heroes) {
        let [name, level, items] = hero.split(' / ')
        level = Number(level)
        heroesArray.push({name, level, items})
    }
    let sortedArray = heroesArray.sort((a, b) => a[`level`] - b[`level`])
    for (const hero of sortedArray) {
        console.log(`Hero: ${hero[`name`]}`)
        console.log(`level => ${hero[`level`]}`)
        console.log(`items => ${hero[`items`]}`)
    }
}


inventory([
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',



])