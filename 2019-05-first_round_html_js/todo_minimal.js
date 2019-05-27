/*jshint esversion: 6 */
/**
 * @file 
 * todo100 - 001 Minimal HTML and Javascript
 *
 * See todo_minimal.html header section for more details.
 */

/** Task input element */
const AddTaskInput = document.getElementById("input-text");
/** List of tasks element */
const List = document.getElementById("list");
const NOTASKS_str = "no tasks";


/** task input - event for enter */
AddTaskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        AddTask();
    }
});
document.getElementById("button-add").addEventListener("click", AddTask);


/**
 * Add input as task to list
 */
function AddTask() {
    RemoveEmpty();
    
    var task = AddTaskInput.value;
    if(!task) {
        return;
    }
    AddLi(List, task);
    AddTaskInput.value = "";
}

function AddLi(ul, text) {
    let li = document.createElement("li");
    li.textContent = text;
    List.append(li);
}

/**
 * 
 */
function RemoveTask() {
    
    SetEmpty();
}

/**
 * 
 */
var EmptyList = true;

/**
 * If no tasks, removes the no tasks item
 * @param {boolean} apply_empty 
 */
function RemoveEmpty() {
    if(EmptyList) {
        List.innerHTML = "";
        EmptyList = false;
    }
}

/**
 * 
 */
function SetEmpty() {
    if(List.children.length <= 0) {
        AddLi(List, NOTASKS_str);
        EmptyList = true;
    }
}