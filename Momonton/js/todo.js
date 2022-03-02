const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDoObjs = []; //array

function saveToDoObjs(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoObjs));
}

function paintToDo(toDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    li.id = toDoObj.id;
    span.innerText = toDoObj.text;
    button.innerText = "❌";
    button.classList.add(TRANSP_CLASSNAME);
    button.classList.add("remover");
    li.classList.add("list");
    toDoList.appendChild(li);
    removerSetting();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log("submit");
    const newToDo = toDoInput.value;
    const listLength = document.querySelectorAll(".list").length;
    toDoInput.value = BLANK_TEXT;
    const toDoObj = {
        id: Date.now(),
        text: newToDo
    }

    if (listLength >= 7) {
        alert("할 일은 최대 7개까지 추가할 수 있습니다.");
        return;
    }
    
    toDoObjs.push(toDoObj);
    paintToDo(toDoObj);
    saveToDoObjs();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDoObjs = localStorage.getItem(TODOS_KEY);

if (savedToDoObjs !== null){
    const parsedToDoObjs = JSON.parse(savedToDoObjs);
    toDoObjs = parsedToDoObjs;
    parsedToDoObjs.forEach(toDoObj => {
        const listLength = document.querySelectorAll(".list").length;

        if (listLength >= 7) {
            alert("할 일은 최대 7개까지 추가할 수 있습니다.");
            return;
        }
        paintToDo(toDoObj);
    })
}
