const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    
    if(inputBox.value=== ''){
        alert("Write something !");
    } 
    else {

        //If the inputBox has a value, it will
        //create a new li element
        //then it will insert the value of the
        //input box into the li element
        //so once the button is pressed, a new task will 
        //appear
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //it will add the class name to the li element,
        //so the checked element will appear
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //it will remove the li
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();