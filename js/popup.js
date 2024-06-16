// june 14 (popup boxes)
// alert, confirm,prompt
function displayMessage(msg){
    alert(msg);
}
function redirectToGoogle(){
    let confiramtion=confirm("Are yo sure you want to visit google")
    if(confiramtion){
        window.location.href="https://google.com"
    }
}
function addTwoNumber(){
    let firstNum=prompt("Enter first number")
    let secondNum=prompt("Enter second number")
    alert(Number(firstNum)+Number(secondNum));
    alert(Number(firstNum)-Number(secondNum));
    alert(Number(firstNum)*Number(secondNum));
    alert(Number(firstNum)/Number(secondNum));
}

