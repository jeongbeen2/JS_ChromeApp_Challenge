const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = document.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
toDoFinished = document.querySelector(".js-finished")

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
    PENDING = cleanToDos;
    saveToDos();
    }

function deleteCheck(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoFinished.removeChild(li);
    const cleanCheck = FINISHED.filter(function(chk){
        return chk.id !== parseInt(li.id);
    });
    FINISHED = cleanCheck;
    saveFinish();
    }

function checkToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = PENDING.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    PENDING = cleanToDos;
    saveToDos();
    paintFinish(li.childNodes[0].innerText);
}

function returnCheck(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoFinished.removeChild(li);
    const cleanCheck = FINISHED.filter(function(chk){
        return chk.id !== parseInt(li.id);
    });
    FINISHED = cleanCheck;
    saveFinish();
    paintToDo(li.childNodes[0].innerText);
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(PENDING));
}

function saveFinish(){
    localStorage.setItem(FINISHED_LS, JSON.stringify(FINISHED));
}

function idId(){
    while (true);
    i = 0;
    let newId = i;
    i++;
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const chkBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    chkBtn.innerText = "✔";
    chkBtn.addEventListener("click",checkToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(chkBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId
    };
    PENDING.push(toDoObj);
    saveToDos();
}

function paintFinish(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const chkBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteCheck);
    chkBtn.innerText = "🔙";
    chkBtn.addEventListener("click", returnCheck);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(chkBtn);
    li.id = newId;
    toDoFinished.appendChild(li);
    const finishObj = {
      text: text,
      id: newId
    };
    FINISHED.push(finishObj);
    saveFinish();
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null)
    {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function loadFinish(){
    const loadedFinish = localStorage.getItem(FINISHED_LS);
    if (loadedFinish !== null){
        const parsedFinish = JSON.parse(loadedFinish);
        parsedFinish.forEach(function(chk){
            paintFinish(chk.text);
        });
    }
}

function init(){
    loadToDo();
    loadFinish();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();