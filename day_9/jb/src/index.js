const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".op")
const jsDisplay = document.querySelector(".display")
const jsClear = document.querySelector(".clear")

let checkBtn = false
let checkPreNum = false

for (let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener("click", inputNum)
}


function handleClear(){
  jsDisplay.value = ""
  cal.result = 0
  cal.preNum = 0
  cal.nextNum = 0
  checkPreNum = false
}

function inputNum(){
  if (checkBtn === true)
  clearDisplay()
  if (cal.preOp === '=' && checkBtn === true)
  console.log("Restart")
  let inputText = this.innerHTML
  jsDisplay.value += inputText
  checkBtn = false
}

function clearDisplay(){
  jsDisplay.value = ""
}


let cal = {
  result: 0,
  preNum: 0,
  nextNum: 0,
  preOp: null,
  op: null,
  calculator: function(){
    let inputText = this.innerHTML
    cal.op = inputText
    checkBtn = true
    if (checkPreNum === false){
      cal.preNum = Number(jsDisplay.value)
      checkPreNum = true
    } else {
      cal.nextNum = Number(jsDisplay.value)
      clearDisplay()
      cal.resultFn(cal.preOp)
      cal.preNum = cal.result
      if (cal.op == '='){
        checkPreNum = false
      }
    }
    cal.preOp = cal.op
  },
  resultFn: function(op){
    switch(op){
      case '+':
      cal.result = cal.preNum + cal.nextNum
      break;
      case '-':
      cal.result = cal.preNum - cal.nextNum
      break;
      case '*':
      cal.result = cal.preNum * cal.nextNum
      break;
      case '/':
      cal.result = cal.preNum / cal.nextNum
      break;
    }
    jsDisplay.value = cal.result
  }
}
for (let i = 0; i < operators.length; i++){
  operators[i].addEventListener("click", cal.calculator)
}
function init(){
  jsClear.addEventListener("click", handleClear)
}

init();