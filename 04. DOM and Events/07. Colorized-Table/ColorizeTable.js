function colorize() {
let evenRows = Array.from(document.querySelectorAll(`body > table > tbody > tr:nth-child(even)`))
    evenRows.forEach(row => {
        // row.children[0].style.backgroundColor = 'Teal'
        // row.children[1].style.backgroundColor = 'Teal'
        row.style.backgroundColor = 'Teal'
        
    })

}
