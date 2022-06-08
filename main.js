const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const divideButton = document.getElementById("divide")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const multiplyButton = document.getElementById("multiply")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const addButton = document.getElementById("add")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const minusButton = document.getElementById("minus")
const dotButton = document.getElementById("dot")
const zeroButton = document.getElementById("zero")
const equalsButton = document.getElementById("equals")
const calculatorScreen = document.getElementById("calculator-screen")

let result = 0


oneButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 1
})
twoButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 2
})
threeButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 3
})
fourButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 4
})
fiveButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 5
})
sixButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 6
})
sevenButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 7
})
eightButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 8
})
nineButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 9
})
zeroButton.addEventListener("click", () =>{
    calculatorScreen.innerText += 0
})
dotButton.addEventListener("click", () =>{
    calculatorScreen.innerText += "."
})
divideButton.addEventListener("click", () =>{
    calculatorScreen.innerText += "/"
})
multiplyButton.addEventListener("click", () =>{
    calculatorScreen.innerText += "*"
})
addButton.addEventListener("click", () =>{
    calculatorScreen.innerText += "+"
})
minusButton.addEventListener("click", () =>{
    calculatorScreen.innerText += "-"
})
clearButton.addEventListener("click", () =>{
    calculatorScreen.innerText = ""
})
deleteButton.addEventListener("click", () =>{
    let inputArr = []
        inputArr.push(calculatorScreen.innerText)
        let inputString = inputArr[0].split("")
        inputString.pop()
        calculatorScreen.innerText = inputString.join("")
})
equalsButton.addEventListener("click", () =>{
    let inputArr = []
        inputArr.push(calculatorScreen.innerText)
        let inputString = inputArr[0].split("")
        for(let i = 0; i < inputString.length; i++){
            if(inputString[i] === "/"){
                divideFunction()
            } else if(inputString[i] === "*"){
                timesFunction()
            } else if(inputString[i] === "+"){
                plusFunction()
            } else if(inputString[i] === "-"){
                minusFunction()
            }
        }
})

function divideFunction(){
    let input = calculatorScreen.innerText.split("/")
        if(input.length === 2){
        result = parseInt(input[0]) / parseInt(input[1])
        }
    calculatorScreen.innerText = result
}
function timesFunction(){
    let input = calculatorScreen.innerText.split("*")
        if(input.length === 2){
        result = parseInt(input[0]) * parseInt(input[1])
        }
    calculatorScreen.innerText = result
}
function plusFunction(){
    let input = calculatorScreen.innerText.split("+")
        if(input.length === 2){
        result = parseInt(input[0]) + parseInt(input[1])
        }
    calculatorScreen.innerText = result
}
    function minusFunction(){
    let input = calculatorScreen.innerText.split("-")
        if(input.length === 2){
        result = parseInt(input[0]) - parseInt(input[1])
        }
    calculatorScreen.innerText = result
}
