let clicked_plus = false
let clicked_minus = false
let clicked_div = false
let clicked_mul = false
let clicked = false
let clicked_equal = false
const printRes = document.querySelector(".res")
let operate1 = ""
let operate2 = ""
function buttonHandle(value) {
    if (clicked_equal) {
        printRes.innerText = "0"
        clicked_equal = false
    }
    if (isNaN(Number.parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
}

function handleNumber(number) {
    if (printRes.innerText == "0") {
        printRes.innerText = number
    } else {
        printRes.innerText += number
    }
}

function handleSymbol(symbol) {
    if (symbol == "+") {
        operate1 = printRes.innerText
        printRes.innerText = "0"
        clicked_plus = true
        clicked = true

    }else if (symbol == "-") {
        operate1 = printRes.innerText
        printRes.innerText = "0"
        clicked_minus = true
        clicked = true
    }else if (symbol == "*"){
        operate1 = printRes.innerText
        printRes.innerText = "0"
        clicked_mul = true
        clicked = true
    }else if (symbol == "/"){
        operate1 = printRes.innerText
        printRes.innerText = "0"
        clicked_div = true
        clicked = true
    }else if(symbol == "=") {
        if (printRes.innerText == "0") {
            operate2 = ""
        } else {
            operate2 = printRes.innerText
        }
        if (operate2 == "") {
            printRes.innerText = "Not enough parameter to operate"
        } else {
            if (clicked_plus) {
                printRes.innerText = String(parseInt(operate1) + parseInt(printRes.innerText))
                clicked_plus = false
            } else if (clicked_minus) {
                printRes.innerText = String(parseInt(operate1) - parseInt(printRes.innerText))
                clicked_minus = false
            } else if (clicked_mul) {
                printRes.innerText = String(parseInt(operate1) * parseInt(printRes.innerText))
                clicked_mul = false
            } else if (clicked_div) {
                printRes.innerText = String(parseInt(operate1) / parseInt(printRes.innerText))
                clicked_div = false
            } else {
                printRes.innerText = "Do not have any behavior to operate"
            }
            clicked_equal = true
        }
    }else if (symbol == "C") {
        printRes.innerText = "0"
        operate1 = ""
        operate2 = ""
    } else if (symbol == "del") {
        if (printRes.innerText.length == 1) {
                printRes.innerText = "0"
                if (clicked) {
                    operate2 = ""
                } else {
                    operate1 = ""
                }
        } else {
            if (clicked) {
                printRes.innerText = printRes.innerText.slice(0, printRes.innerText.length - 1)
                operate2 = printRes.innerText
            } else {
                printRes.innerText = printRes.innerText.slice(0, printRes.innerText.length - 1)
                operate1 = printRes.innerText
            }
        }
    }
}

function init() {
    const num = document.querySelector(".number")
    num.addEventListener("click", function(event) {
        buttonHandle(event.target.innerHTML)
    })
}

init()
