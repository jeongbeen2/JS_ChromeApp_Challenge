const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
toDoFinished = document.querySelector(".js-finished");


const TODOS_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let PENDING = [];

let FINISHED = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = PENDING.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    PENDING = cleanToDos
    saveToDos();
  }
  
  function checkToDo(text){
    const btn = event.target;
    const li = btn.parentNode;
    btn.innerText = "🔙";
    toDoFinished.appendChild(li);
    const newId = PENDING.length + 1;
    const toDoObj = {
      text: text,
      id: newId
    };
    FINISHED.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(PENDING));
    localStorage.setItem(FINISHED_LS, JSON.stringify(FINISHED));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const chkBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = PENDING.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    chkBtn.innerText = "✔";
    chkBtn.addEventListener("click", checkToDo);
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(chkBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    PENDING.push(toDoObj);
    saveToDos()
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}



function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        }
    }



function init(){
loadToDos();
toDoForm.addEventListener("submit", handleSubmit);
}
init();