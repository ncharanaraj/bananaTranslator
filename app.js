// var username = prompt("Enter your name");
// alert("Our next boss is " + username);

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

function clickEvenHandler() {
    console.log("clicked")
    console.log("input", txtInput.value)
}

btnTranslate.addEventListener("click", clickEvenHandler);