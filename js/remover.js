const TRANSP_CLASSNAME= "transparent";
const TODOS_KEY = "todos";

function removerSetting(){

    const list = document.querySelector("#todo-list li:last-child");
    const button = list.querySelector("button");

    list.addEventListener("mouseenter", function(event) {
        button.classList.remove(TRANSP_CLASSNAME);
    })

    list.addEventListener("mouseleave", function(event) {
        button.classList.add(TRANSP_CLASSNAME);
    })

    button.addEventListener("click", function(event) {
        const targetID = button.parentElement.id;
        
        toDoObjs = toDoObjs.filter(function(item) {
            return item.id !== parseInt(targetID);
        })

        saveToDoObjs();

        list.classList.add("transparent");
        setTimeout(() => list.remove(), 300);
    })
}