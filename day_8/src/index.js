const numRange = document.querySelector("#js-range"),
  between = document.querySelector("#js-between"),
  playBtn = document.querySelector("#js-play"),
  guess = document.querySelector("#js-guess"),
  jsInput = document.querySelector("#js-input");
console.dir(jsInput);
function handleRangeChange(event) {
  const size = event.target.value;
  between.innerText = "Generate a number between 0 and " + size;
  between.style.fontSize = "30px";

  function handleSubmit(event) {
    event.preventDefault();
    let randomNum = Math.round(Math.random() * size);
    test.innerText =
      "You chose : " + jsInput.value + " The machine chose : " + randomNum;
    if (jsInput.value == randomNum) {
      victory.innerText = "You Won!";
      victory.style.fontWeight = "bold";
    } else {
      victory.innerText = "You lose!";
      victory.style.fontWeight = "bold";
    }
  }
  playBtn.addEventListener("click", handleSubmit);
}

function init() {
  numRange.addEventListener("input", handleRangeChange);
}

init();
