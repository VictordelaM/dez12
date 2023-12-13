function check(){
    let pw = document.querySelector("#password").value
    let output = document.querySelector("#result")
    pw.length >= 8 ? output.textContent = "pw sicher" : output.textContent = "pw unsicher"
}