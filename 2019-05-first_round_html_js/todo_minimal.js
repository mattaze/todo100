/*jshint esversion: 6 */
/**
 * @file 
 * todo100 - 001 Minimal HTML and Javascript
 *
 * See todo_minimal.html header section for more details.
 * 
 * todo: 2019-05-27 - implement Remove task, html and js needed.
 *
 * Effect Line counts: notepad++ regex expression
 *   empty rows  "^$"   or "^\s*$" which matches any whitespace
 *   Not empty line:  "",   spaces or tabs: "    ", "	"
 *   Not closing tag on its own: "}"
 *   Not comment line: code discipline will require comments placed on their own lines and not after code on the same line.
 *    discipline rule to help simplify counter search criteria
 *    Comment lines start with 
 *      javascript: //, /**, " *", *, /*
 *      razon: @* 
 *      html: <!--
 *      asp: <%--
 *
 *   HTML line counts: number of opening tags.
 *   Javascript: number of functions.
 *   number for files
 *   number of languages, platforms, services (3 tier, 2 tier, 1 client only)
 *   operating cost - Azure and AWS (cloud services especially)
 *   setup and complete time (research time)
 *   tools: VS Code 2019 (extensions), notepad++
 *
 *   Work Effort notes:
 *     - First setup - most of HTML and add task javascript - 2-3 hours (some git setup time)
 *     - Remove Task, rewrite add task so button included and code more "reusable", AddLi replaced with CreateTextElement and CreateTaskElement. - 3 hours
 *     
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

List.addEventListener("click", function(event) {
	if (event.target.nodeName == "BUTTON") {
		RemoveTask(event.target.parentElement);
	}
});

/**
 * Add input as task to list
 */
function AddTask() {
    var task = AddTaskInput.value;
    if(!task) {
        return;
    }

    RemoveEmpty();
	
	//to reuse task or create a new temporary variable? JS allows us todo this. But changes meaning of object. Future iterations will help.
	task = CreateTaskElement(task);
	List.append(task);

    AddTaskInput.value = "";
}


/**
 * create task element for list
 * @param {string} type node type
 * @param {string} text content
 */
function CreateTaskElement(task_text) {
	let li = CreateTextElement("li", task_text);
	let remove_button = CreateTextElement("button", "remove");
	li.prepend(remove_button);
	return li;
}

/**
 * helper function to create element of type, with text content as provided
 * @param {string} type node type
 * @param {string} text content
 */
function CreateTextElement(type, text) {
	let element = document.createElement(type);
    element.textContent = text;
	return element;
}

function AddLi(ul, text) {
	let li = CreateTextElement("li", text);
    List.append(li);
}

/**
 * 
 */
function RemoveTask(task_element) {
    List.removeChild(task_element);
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