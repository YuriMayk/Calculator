
const percentButton = document.getElementById("percent-button")
const ceButton = document.getElementById("ce-button")
const cButton = document.getElementById("c-button")
const oneDividedByButton = document.getElementById("one-divided-by-button")
const backspaceButton = document.getElementById("backspace-button")
const sevenButton = document.getElementById("seven-button")
const eightButton = document.getElementById("eight-button")
const nineButton = document.getElementById("nine-button")
const divisionButton = document.getElementById("division-button")
const exponentialButton = document.getElementById("exponential-button")
const fourButton = document.getElementById("four-button")
const fiveButton = document.getElementById("five-button")
const sixButton = document.getElementById("six-button")
const multiplicationButton = document.getElementById("multiplication-button")
const squareButton = document.getElementById("square-button")
const oneButton = document.getElementById("one-button")
const twoButton = document.getElementById("two-button")
const threeButton = document.getElementById("three-button")
const minusButton = document.getElementById("minus-button")
const plussButton = document.getElementById("pluss-button")
const invertButton = document.getElementById("invert-button")
const zeroButton = document.getElementById("zero-button")
const pointButton = document.getElementById("point-button")
const equalButton = document.getElementById("equal-button")

const finalResult = document.getElementById("final-result")
const operation = document.getElementById("operation")
const saved = document.getElementById("saved")
const typed = document.getElementById("typed")

let realFinalResult = 0
let showOperation = "Nenhuma operação selecionada"

finalResult.innerHTML = `${realFinalResult}`
operation.innerHTML = `${showOperation}`

//deletar a função check depois que finalizar aplicação. Manter o check, para observar se os botões estão funcionando.
const check = ()=> {
    console.log("fui clicado")
}


//Typing Functions






percentButton.addEventListener('click',check)
ceButton.addEventListener('click',check)
cButton.addEventListener('click',check)
oneDividedByButton.addEventListener('click',check)
backspaceButton.addEventListener('click',check)
sevenButton.addEventListener('click',check)
eightButton.addEventListener('click',check)
nineButton.addEventListener('click',check)
divisionButton.addEventListener('click',check)
exponentialButton.addEventListener('click',check)
fourButton.addEventListener('click',check)
fiveButton.addEventListener('click',check)
sixButton.addEventListener('click',check)
multiplicationButton.addEventListener('click',check)
squareButton.addEventListener('click',check)
oneButton.addEventListener('click',check)
twoButton.addEventListener('click',check)
threeButton.addEventListener('click',check)
minusButton.addEventListener('click',check)
plussButton.addEventListener('click',check)
invertButton.addEventListener('click',check)
zeroButton.addEventListener('click',check)
pointButton.addEventListener('click',check)
equalButton.addEventListener('click',check)
