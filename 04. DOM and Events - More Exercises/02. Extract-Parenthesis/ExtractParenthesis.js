function extract(content) {
    const element = document.getElementById(content);
    const text = element.textContent;
    const regex = /\((.*?)\)/g;
    const matches = text.match(regex);
    if (!matches) {
     return "";
    }
    let result = []
    matches.forEach((word) => {result.push(word.slice(1, -1))})
    console.log(result.join("; "));
    return result.join("; ");
}
