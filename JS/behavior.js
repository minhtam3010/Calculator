const num0 = document.querySelector(".num-0")
const printRes = document.querySelector(".res")

const num1 = document.querySelector(".num-1")
const num2 = document.querySelector(".num-2")
const num3 = document.querySelector(".num-3")
const num4 = document.querySelector(".num-4")
const num5 = document.querySelector(".num-5")
const num6 = document.querySelector(".num-6")
const num7 = document.querySelector(".num-7")
const num8 = document.querySelector(".num-8")
const num9 = document.querySelector(".num-9")

const clear = document.querySelector(".clear")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const div = document.querySelector(".divide")
const mul = document.querySelector(".multiplication")
const equal = document.querySelector(".equal")
const del = document.querySelector(".del")
let clicked = false
let clicked_plus = false
let clicked_minus = false
let clicked_div = false
let clicked_mul = false
let operate1 = ""
let operate2 = ""
num0.addEventListener("click", function(event) {
    if (clicked) {
        if (printRes.innerHTML != "0"){
            operate2 += event.target.innerHTML
            printRes.innerHTML = operate2
        }
    } else {
        if (printRes.innerHTML != "0") {
            operate1 += event.target.innerHTML
            printRes.innerHTML = operate1
        }
    }
})
num1.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num2.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num3.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num4.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num5.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num6.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num7.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num8.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})
num9.addEventListener("click", function(event) {
    if (clicked) {
        operate2 += event.target.innerHTML
        printRes.innerHTML = operate2
    } else {
        operate1 += event.target.innerHTML
        printRes.innerHTML = operate1
    }
})

plus.addEventListener("click", function() {
    clicked = true
    clicked_plus = true
    printRes.innerHTML = "0"
})

minus.addEventListener("click", function() {
    clicked = true
    clicked_minus = true
    printRes.innerHTML = "0"
})
div.addEventListener("click", function() {
    clicked = true
    clicked_div = true
    printRes.innerHTML = "0"
})
mul.addEventListener("click", function() {
    clicked = true
    clicked_mul = true
    printRes.innerHTML = "0"
})

equal.addEventListener("click", function() {
    if (clicked_plus){
        printRes.innerHTML = (Number.parseInt(operate1) + Number.parseInt(operate2)).toString()
        clicked_plus = false
    } else if (clicked_minus) {
        printRes.innerHTML = (Number.parseInt(operate1) - Number.parseInt(operate2)).toString()
        clicked_minus = false
    } else if (clicked_mul) {
        printRes.innerHTML = (Number.parseInt(operate1) * Number.parseInt(operate2)).toString()
        clicked_mul = false
    } else if (clicked_div) {
        printRes.innerHTML = (Number.parseInt(operate1) / Number.parseInt(operate2)).toString()
        clicked_div = false
    } else {
        printRes.innerHTML = "Something wrong?"
    }
    operate1 = ""
    operate2 = ""
    clicked = false
})

clear.addEventListener("click", function() {
    printRes.innerHTML = "0"
    operate1 = ""
    operate2 = ""
    clicked = false
})

del.addEventListener("click", function () {
    if (printRes.innerHTML != "0") {
        if (clicked) {
            if (operate2.length == 1) {
                printRes.innerHTML = "0"
                operate2 = ""
            } else {
                operate2 = operate2.slice(0, operate2.length - 1)
                printRes.innerHTML = operate2
            }
        }else {
            if (operate1.length == 1) {
                printRes.innerHTML = "0"
                operate1 = ""
            } else {
                operate1 = operate1.slice(0, operate1.length - 1)
                printRes.innerHTML = operate1
            }
        }
    }
})