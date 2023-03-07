function cats(catsArray) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let allCats = []
    for (const catData of catsArray) {
        let [name, age] = catData.split(' ')
        let newCat = new Cat(name, age)
        allCats.push(name)
        newCat.meow()
    }


}

cats(['Mellow 2', 'Tom 5'])