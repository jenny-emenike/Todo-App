window.addEventListener("load", function(){
let form = document.querySelector("#input-form");
let input = document.querySelector("#input-id");
let task_container =document.querySelector("#tasks");

form.addEventListener('submit', (e) =>  {
e.preventDefault();

let task = input.value;
if(!task){
    alert("Enter a task");
}else{
    alert("Success");
}

let editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.classList.add("editBtn");

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete"
deleteBtn.classList.add("deleteBtn");

let buttons = document.createElement("div");
buttons.classList.add("buttons");

let content_input = document.createElement("input");
content_input.classList.add("text");
content_input.value = task;
content_input.setAttribute("readonly", "readonly");

let content = document.createElement("div");
content.classList.add("task-content");

let task_list = document.createElement("div");
task_list.classList.add("task-types");

buttons.appendChild(editBtn);
buttons.appendChild(deleteBtn);
content.appendChild(content_input);

task_list.appendChild(content);
task_list.appendChild(buttons);
task_container.appendChild(task_list);


editBtn.addEventListener("click", function(){
    if(editBtn.innerText.toLowerCase() == "edit"){
    content_input.removeAttribute("readonly");
    content_input.focus();
    editBtn.innerText="Save";
    }else{
    content_input.setAttribute("readonly", "readonly");
     editBtn.innerText= "Edit";
    }
})

deleteBtn.addEventListener("click", function(){
    task_container.removeChild(task_list);
})


})
})