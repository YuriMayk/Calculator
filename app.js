'use strict'
const display = document.getElementById("final-result")
const numbers = document.querySelectorAll("[id*=button-number]")
const operators = document.querySelectorAll("[id*=operator]")

let newNumberOnDisplay = true;
let operator
let firstNumber

const pendentOperation = () => operator !== undefined

const calculate = () => {
    if (pendentOperation()) {
        const currentNumber = parseFloat(display.textContent)
        newNumberOnDisplay = true
        const result = eval(`${firstNumber}${operator}${currentNumber}`)
        refreshDisplay(parseFloat(result))
    }
}

const refreshDisplay = (text) => {
    if (newNumberOnDisplay) {
        display.textContent = text //.toLocaleString('BR')
        newNumberOnDisplay = false
    } else {
        display.textContent += text //.toLocaleString('BR')
    }
}

const insertNumber = (event) => refreshDisplay(event.target.textContent)
numbers.forEach(number => number.addEventListener("click", insertNumber))


const selectOperator = (event) => {
    if (!newNumberOnDisplay) {
        calculate()
        newNumberOnDisplay = true
        operator = event.target.textContent
        firstNumber = parseFloat(display.textContent)
        console.log(operator)
    }
}

operators.forEach(operator => operator.addEventListener("click", selectOperator))

const activateEqual = () => {
    calculate()
    operator = undefined
}

document.getElementById("equal-button").addEventListener("click", activateEqual)


const clearDisplay = () => display.textContent = ""
document.getElementById("ce-operator").addEventListener("click", clearDisplay)

const clearCalculation = () => {
    clearDisplay()
    operator = undefined
    newNumberOnDisplay = true
    firstNumber = undefined
}

document.getElementById("c-operator").addEventListener("click", clearCalculation)

const removeLastCharacter = () => display.textContent = display.textContent.slice(0, -1)

document.getElementById("backspace-delete").addEventListener("click", removeLastCharacter)

const invertSign = () => {
    newNumberOnDisplay = true
    refreshDisplay(display.textContent * -1)

}
document.getElementById("invert-operator").addEventListener("click", invertSign)

const thereIsAPoint = () => display.textContent.indexOf(".") !== -1
const thereIsValue = () => display.textContent.length > 0

const insertPoint = () => {
    if (!thereIsAPoint()) {
        if (thereIsValue()) {
            refreshDisplay(".")
        } else {
            refreshDisplay("0.")
        }
    }
}

document.getElementById("point-button-point").addEventListener("click", insertPoint)


const keyboardMap = {
    "0": "zero-button-number",
    "1": "one-button-number",
    "2": "two-button-number",
    "3": "three-button-number",
    "4": "four-button-number",
    "5": "five-button-number",
    "6": "six-button-number",
    "7": "seven-button-number",
    "8": "eight-button-number",
    "9": "nine-button-number",
    "+": "pluss-operator",
    "-": "minus-operator",
    "*": "multiplication-operator",
    "/": "division-operator",
    "Enter": "equal-button",
    "=": "equal-button",
    ".": "point-button-point",
    ",": "point-button-point",
    "Backspace": "backspace-delete",
    "Delete": "backspace-delete",
    "c": "ce-operator",
    "Escape": "c-operator"
}

const toMapKeyboard = (event) => {
    const key = event.key
    console.log(key)
    const allowedKey = () => Object.keys(keyboardMap).indexOf(key) !== -1

    if (allowedKey()) {
        document.getElementById(keyboardMap[key]).click()
    }
}

document.addEventListener("keydown", toMapKeyboard)

const percent = () => {
    firstNumber = firstNumber * 1/100
    refreshDisplay(firstNumber)
}

document.getElementById("percent-operator").addEventListener("click",percent)