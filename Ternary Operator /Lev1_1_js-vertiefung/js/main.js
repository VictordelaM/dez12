function check(){
    let input = document.querySelector("#age").value
    let output = document.querySelector("#result")
    console.log(input)
    input >= 18
        ? output.textContent = "volljährig"
        : output.textContent = "minderjährig"
}       