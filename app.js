// var username = prompt("Enter your name");
// alert("Our next boss is " + username);

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

function clickEvenHandler() {
    outputDiv.innerText = "kjdshfjk" + txtInput.value
}

btnTranslate.addEventListener("click", clickEvenHandler);