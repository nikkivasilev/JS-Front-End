function printDNAStrand(length) {
    const strand = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < length; i++) {
        if (i % 4 === 0) {
            console.log(`**${strand[index % 10]}${strand[(index + 1) % 10]}**`);
            index += 2;
        } else if (i % 4 === 1) {
            console.log(`*${strand[index % 10]}--${strand[(index + 1) % 10]}*`);
            index += 2;
        } else if (i % 4 === 2) {
            console.log(`${strand[index % 10]}----${strand[(index + 1) % 10]}`);
            index += 2;
        } else if (i % 4 === 3) {
            console.log(`*${strand[index % 10]}--${strand[(index + 1) % 10]}*`);
            index += 2;
        }
    }
}

// example usage
