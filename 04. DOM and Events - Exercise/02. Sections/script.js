function create(words) {
   let mainDiv = document.getElementById(`content`)
   words.forEach(word => {
      let div = document.createElement(`div`)
      let p = document.createElement(`p`)
      p.textContent = word
      p.style.display = `none`
      div.appendChild(p)
      div.addEventListener(`click`, () => p.style.display = `unset`)
      mainDiv.appendChild(div)
   });
}