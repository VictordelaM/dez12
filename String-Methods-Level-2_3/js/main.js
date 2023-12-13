function check(){
    let eingabe = document.querySelector("#search-input").value
    let article = document.querySelector("article")
    article.innerHTML = article.innerText.replaceAll(eingabe, `<span class="highlight">${eingabe}</span>`)
}

console.log("input")