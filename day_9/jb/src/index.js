const jsDisplay = document.querySelector(".display"),
jsClear = document.querySelector(".clear"),
jsEqual = document.querySelector(".equal");



function add(num){
  jsDisplay.value = jsDisplay.value + num;
}

function calculate(){
  let result = eval(jsDisplay.value);
  jsDisplay.value = result;
}

function handleClear(){
  jsDisplay.value = "";
}


function init() {
  jsClear.addEventListener("click", handleClear);
}
  init();