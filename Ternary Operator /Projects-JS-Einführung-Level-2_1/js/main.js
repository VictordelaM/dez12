
function check(){
    let input = document.querySelector("#input").value
    let output = document.querySelector("#output")
    let warning = document.querySelector("#warning")
    let toggle = false
    console.log(input.lenght)
    console.log(input)
    input.length >= 1 
        ? output.textContent = input
        : warning.textContent = "Bitte gebe zuerst eine Nachricht ein"
    input.length >= 1 
        ? warning.textContent = " "
        : warning.textContent = "Bitte gebe zuerst eine Nachricht ein"
}



