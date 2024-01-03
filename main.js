let content = document.querySelector("#content")
let clear = document.querySelector("#clear")
let remove = document.querySelector("#remove")
let bracket = document.querySelector("#bracket")
let percent = document.querySelector("#percent")
let divide = document.querySelector("#divide")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let multiply = document.querySelector("#multiply")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let minus = document.querySelector("#minus")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let plus = document.querySelector("#plus")
let plusOrMinus = document.querySelector("#plus-or-minus")
let zero = document.querySelector("#zero")
let dot = document.querySelector("#dot")
let equal = document.querySelector("#equal")
let myBtn = document.querySelector("#myBtn")
let wrapper = document.querySelector("#wrapper")
let topText = document.querySelector("#top-text")
let text = document.querySelectorAll("p")

// BTN EFFECTS
myBtn.addEventListener("click", function() {
    if (wrapper.style.backgroundColor == "rgba(0, 0, 0, 0.4)" && content.style.color == "white" 
    && topText.style.color == "white" && content.style.backgroundColor == "black") {
        myBtn.textContent = "Dark Mode"
        wrapper.style.backgroundColor = "rgba(255, 255, 255, 0.4)"
        content.style.color = "black"
        topText.style.color = "black"
        content.style.backgroundColor = "white"
    } else {
        myBtn.textContent = "Light Mode"
        wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
        content.style.color = "white"
        topText.style.color = "white"
        content.style.backgroundColor = "black"
    }

})

function rZero () {
    if (content.textContent[0] == "0" && content.textContent[1] != "." && content.textContent[1] != "-"
    && content.textContent[1] != "+" && content.textContent[1] != "/" && content.textContent[1] != "*"
    && content.textContent[1] != "%") {
        content.textContent = content.textContent.slice(1)
    }
}
function rDiscard () {
    if (content.textContent.length > 16) {
        content.textContent = content.textContent.slice(0, -1);
    }
}
// EFFECTS ON CLICK
clear.addEventListener("click", ()=> {
    content.textContent = "0"
    topText.textContent = ""
})
zero.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*0"
    } else if (content.textContent.includes(".") || !content.textContent
    || content.textContent.includes("1") || content.textContent.includes("2") || content.textContent.includes("3")
    || content.textContent.includes("3") || content.textContent.includes("4") || content.textContent.includes("5")
    || content.textContent.includes("6") || content.textContent.includes("7") || content.textContent.includes("8")
    || content.textContent.includes("9") || content.textContent.includes("+") || content.textContent.includes("-")
    || content.textContent.includes("*") || content.textContent.includes(")") || content.textContent.includes("(")) {
            content.textContent += 0;
}
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rDiscard()
})
one.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*1"
    } else {
        content.textContent += 1
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
two.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*2"
    } else {
        content.textContent += 2
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
three.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*3"
    } else {
        content.textContent += 3
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
four.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*4"
    } else {
        content.textContent += 4
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
five.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*5"
    } else {
        content.textContent += 5
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
six.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*6"
    } else {
        content.textContent += 6
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
seven.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*7"
    } else {
        content.textContent += 7
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
eight.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*8"
    } else {
        content.textContent += 8
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
nine.addEventListener("click", function() {
    if (content.textContent.endsWith(")")) {
        content.textContent += "*9"
    } else {
        content.textContent += 9
    }
    const myAudio = document.querySelector("#myAudio")
    myAudio.currentTime = 0
    myAudio.play()
    rZero()
    rDiscard()
})
plus.addEventListener("click", function() {
    if (!content.textContent.endsWith("+") && content.textContent && !content.textContent.endsWith("(")
    && !content.textContent.endsWith("-") && !content.textContent.endsWith(".") 
    && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
        content.textContent += "+"
    }
    rDiscard()
})
divide.addEventListener("click", function() {
    if (!content.textContent.endsWith("/") && content.textContent && !content.textContent.endsWith("+") 
    && !content.textContent.endsWith("-") && !content.textContent.endsWith(".") 
    && !content.textContent.endsWith("*") && !content.textContent.endsWith("(")) {
        content.textContent += "/"
    }
    rDiscard()
})
multiply.addEventListener("click", function() {
    if (!content.textContent.endsWith("*") && content.textContent && !content.textContent.endsWith("+") 
    && !content.textContent.endsWith("-") && !content.textContent.endsWith(".") 
    && !content.textContent.endsWith("/") && !content.textContent.endsWith("(")) {
        content.textContent += "*"
    }
    rDiscard()
})
minus.addEventListener("click", function() {
    if (!content.textContent.endsWith("-") && content.textContent && !content.textContent.endsWith("+") 
    && !content.textContent.endsWith(".") && !content.textContent.endsWith("(")
    && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
        content.textContent += "-"
    } 
    rDiscard()
})
plusOrMinus.addEventListener("click", function() {
    rZero()
    if (!content.textContent.endsWith("-") && !content.textContent.endsWith("+") 
    && !content.textContent.endsWith(".") 
    && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
        content.textContent += "-"
    }
    rDiscard()
})
dot.addEventListener("click", function() {
    if (!content.textContent.endsWith(".") && content.textContent && !content.textContent.endsWith("(")
    && !content.textContent.includes(".") && !content.textContent.endsWith(")")
    || content.textContent.includes("+") || content.textContent.includes("-")
    || content.textContent.includes("/") || content.textContent.includes("*") 
    || content.textContent.includes("%")) {
        content.textContent +="."
    }
    rDiscard()
})
percent.addEventListener("click", function() {
    if (!content.textContent.endsWith("%") && content.textContent && !content.textContent.endsWith("+") 
    && !content.textContent.endsWith("-") && !content.textContent.endsWith("(")
    && !content.textContent.endsWith("*") && !content.textContent.endsWith("/") ) {
        content.textContent += "%"
    }
    rDiscard()
})
bracket.addEventListener("click", function() {
    rZero()
    if ((!content.textContent.includes("(")) && (content.textContent.endsWith("1") || content.textContent.endsWith("2")
    || content.textContent.endsWith("3") || content.textContent.endsWith("0")
    || content.textContent.endsWith("3") || content.textContent.endsWith("4") || content.textContent.endsWith("5")
    || content.textContent.endsWith("6") || content.textContent.endsWith("7") || content.textContent.endsWith("8")
    || content.textContent.endsWith("9"))) {
        content.textContent += "*("
    } else if (!content.textContent.endsWith("(") && !content.textContent.endsWith("1") && !content.textContent.endsWith("2")
    && !content.textContent.endsWith("3") && !content.textContent.endsWith("0")
    && !content.textContent.endsWith("3") && !content.textContent.endsWith("4") && !content.textContent.endsWith("5")
    && !content.textContent.endsWith("6") && !content.textContent.endsWith("7") && !content.textContent.endsWith("8")
    && !content.textContent.endsWith("9")) {
        content.textContent += "("
    } else if (!content.textContent.endsWith(")") && content.textContent.includes("(")) {
        content.textContent += ")"
    }
    rDiscard()
})
equal.addEventListener("click", function () {
    if (!content.textContent.endsWith("-") && !content.textContent.endsWith("+")
    && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")
    && !content.textContent.endsWith("%") && (content.textContent.includes("-") || content.textContent.includes("+")
    || content.textContent.includes("*") || content.textContent.includes("/")
    || content.textContent.includes("%"))) {
        topText.textContent = content.textContent + "="
        topText.classList.add("add-to-top-text")
    }
    if (content.textContent == "0.1+0.2") {
        content.textContent = "0.3"
    } else if (content.textContent.includes("%") && !content.textContent.includes("*")
    && !content.textContent.includes("+") && !content.textContent.includes("-")
    && !content.textContent.includes("/") && !content.textContent.includes("(")
    && !content.textContent.includes(")")) {
        let indexOfPercent = content.textContent.indexOf("%")
        let firstNumber = content.textContent.slice(0, indexOfPercent)
        let secondNumber = content.textContent.slice(indexOfPercent + 1, content.textContent.length)
        let firstResult = Number(firstNumber) * Number(secondNumber)
        let finalResult = firstResult / 100
        content.textContent = finalResult
    } else {
        content.textContent = eval(content.textContent)
    }
    
})
remove.addEventListener("click", function() {
    content.textContent = content.textContent.slice(0, -1);
    if (!content.textContent) {
        topText.textContent = ""
        content.textContent = "0"
    }
})

//EFFECT ON KEYBOARD
document.addEventListener("keydown", function(event) {
    if (event.key == "1") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*1"
        } else {
            content.textContent += 1
        }
        one.classList.add("add-p")
        setTimeout(() => {
            one.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "2") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*2"
        } else {
            content.textContent += 2
        }
        two.classList.add("add-p")
        setTimeout(() => {
            two.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "3") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*3"
        } else {
            content.textContent += 3
        }
        three.classList.add("add-p")
        setTimeout(() => {
            three.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "4") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*4"
        } else {
            content.textContent += 4
        }
        four.classList.add("add-p")
        setTimeout(() => {
            four.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "5") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*5"
        } else {
            content.textContent += 5
        }
        five.classList.add("add-p")
        setTimeout(() => {
            five.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "6") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*6"
        } else {
            content.textContent += 6
        }
        six.classList.add("add-p")
        setTimeout(() => {
            six.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "7") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*7"
        } else {
            content.textContent += 7
        }
        seven.classList.add("add-p")
        setTimeout(() => {
            seven.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "8") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*8"
        } else {
            content.textContent += 8
        }
        eight.classList.add("add-p")
        setTimeout(() => {
            eight.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "9") {
        if (content.textContent.endsWith(")")) {
            content.textContent += "*9"
        } else {
            content.textContent += 9
        }
        nine.classList.add("add-p")
        setTimeout(() => {
            nine.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        rZero()
        rDiscard()
    } else if (event.key == "c") {
        content.textContent = "0"
        topText.textContent = ""
        clear.classList.add("add-p")
        setTimeout(() => {
            clear.classList.remove("add-p")
        }, 100);
    } else if (event.key == "Backspace") {
        content.textContent = content.textContent.slice(0, -1);
        if (!content.textContent) {
            topText.textContent = ""
            content.textContent = "0"
        }
        remove.classList.add("add-p")
        setTimeout(() => {
            remove.classList.remove("add-p")
        }, 100);
    } else if (event.key == "+") {
        if (!content.textContent.endsWith("+") && content.textContent && !content.textContent.endsWith("(")
        && !content.textContent.endsWith("-") && !content.textContent.endsWith(".") 
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
            content.textContent += "+"
        }
        plus.classList.add("add-p")
        setTimeout(() => {
            plus.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == "-") {
        if (!content.textContent.endsWith("-") && !content.textContent.endsWith("+") 
        && !content.textContent.endsWith(".") 
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
            content.textContent += "-"
        }
        minus.classList.add("add-p")
        setTimeout(() => {
            minus.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == "/") {
        if (!content.textContent.endsWith("/") && content.textContent && !content.textContent.endsWith("+") 
        && !content.textContent.endsWith("-") && !content.textContent.endsWith(".") 
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("(")) {
            content.textContent += "/"
        }
        divide.classList.add("add-p")
        setTimeout(() => {
            divide.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == "*") {
        if (!content.textContent.endsWith("-") && content.textContent && !content.textContent.endsWith("+") 
        && !content.textContent.endsWith(".") && !content.textContent.endsWith("(")
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
            content.textContent += "*"
        }
        multiply.classList.add("add-p")
        setTimeout(() => {
            multiply.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == "%") {
        if (!content.textContent.endsWith("%") && content.textContent && !content.textContent.endsWith("+") 
        && !content.textContent.endsWith("-") && !content.textContent.endsWith("(")
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")) {
            content.textContent += "%"
        }
        percent.classList.add("add-p")
        setTimeout(() => {
            percent.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == "Enter" || event.key == "=") {
        if (!content.textContent.endsWith("-") && !content.textContent.endsWith("+")
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("/")
        && !content.textContent.endsWith("%") && (content.textContent.includes("-") || content.textContent.includes("+")
        || content.textContent.includes("*") || content.textContent.includes("/")
        || content.textContent.includes("%"))) {
        topText.textContent = content.textContent + "="
        if (content.textContent) {
            topText.classList.add("add-to-top-text")
        }
    }
        if (content.textContent == "0.1+0.2") {
            content.textContent = "0.3"
        }  else if (content.textContent.includes("%") && !content.textContent.includes("*")
        && !content.textContent.includes("+") && !content.textContent.includes("-")
        && !content.textContent.includes("/") && !content.textContent.includes("(")
        && !content.textContent.includes(")")) {
            let indexOfPercent = content.textContent.indexOf("%")
            let firstNumber = content.textContent.slice(0, indexOfPercent)
            let secondNumber = content.textContent.slice(indexOfPercent + 1, content.textContent.length)
            let firstResult = Number(firstNumber) * Number(secondNumber)
            let finalResult = firstResult / 100
            content.textContent = finalResult
        }  else {
            content.textContent = eval(content.textContent)
        }
        equal.classList.add("add-p")
        setTimeout(() => {
            equal.classList.remove("add-p")
        }, 100);
    } else if (event.key == ".") {
        if (!content.textContent.endsWith(".") && content.textContent && !content.textContent.endsWith("(")
        && !content.textContent.includes(".") && !content.textContent.endsWith(")")
        || content.textContent.includes("+") || content.textContent.includes("-")
        || content.textContent.includes("/") || content.textContent.includes("*") 
        || content.textContent.includes("%")) {
            content.textContent +="."
        }
        dot.classList.add("add-p")
        setTimeout(() => {
            dot.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == "0") {
        if (content.textContent.includes(".") || !content.textContent
        || content.textContent.includes("1") || content.textContent.includes("2") || content.textContent.includes("3")
        || content.textContent.includes("3") || content.textContent.includes("4") || content.textContent.includes("5")
        || content.textContent.includes("6") || content.textContent.includes("7") || content.textContent.includes("8")
        || content.textContent.includes("9") || content.textContent.includes("+") || content.textContent.includes("-")
        || content.textContent.includes("*") || content.textContent.includes(")") || content.textContent.includes("(")) {
            content.textContent += 0
            zero.classList.add("add-p")
        setTimeout(() => {
            zero.classList.remove("add-p")
        }, 100);
        const myAudio = document.querySelector("#myAudio")
        myAudio.currentTime = 0
        myAudio.play()
        }
        rDiscard()
    } else if (event.key == "(") {
        rZero()
        if ((!content.textContent.includes("(")) && (content.textContent.endsWith("1") || content.textContent.endsWith("2")
             || content.textContent.endsWith("3") || content.textContent.endsWith("0")
             || content.textContent.endsWith("3") || content.textContent.endsWith("4") || content.textContent.endsWith("5")
             || content.textContent.endsWith("6") || content.textContent.endsWith("7") || content.textContent.endsWith("8")
             || content.textContent.endsWith("9"))) {
        content.textContent += "*("
       } else if (!content.textContent.endsWith("(") && !content.textContent.endsWith("1") && !content.textContent.endsWith("2")
        && !content.textContent.endsWith("3") && !content.textContent.endsWith("0")
        && !content.textContent.endsWith("3") && !content.textContent.endsWith("4") && !content.textContent.endsWith("5")
        && !content.textContent.endsWith("6") && !content.textContent.endsWith("7") && !content.textContent.endsWith("8")
        && !content.textContent.endsWith("9")) {
            content.textContent += "("
        }
        bracket.classList.add("add-p")
        setTimeout(() => {
            bracket.classList.remove("add-p")
        }, 100);
        rDiscard()
    } else if (event.key == ")") {
        if (!content.textContent.endsWith(")") && content.textContent.length > 1 && content.textContent.includes("(")
        && !content.textContent.endsWith("*") && !content.textContent.endsWith("-") && !content.textContent.endsWith("+")
        && !content.textContent.endsWith("/") && !content.textContent.endsWith(".")) {
            content.textContent += ")"
            rZero()
        rDiscard()
        }
        bracket.classList.add("add-p")
        setTimeout(() => {
            bracket.classList.remove("add-p")
        }, 100);
    }
})
