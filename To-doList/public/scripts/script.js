function addListItem(){

    if (inputBox.value == ""){
        return;
    }

    let newLI = document.createElement("li");
    newLI.className = "listElement";

    let newText = document.createElement("p");
    newText.className = "listText";
    let text = document.createTextNode(inputBox.value);
    newText.appendChild(text);
    newLI.appendChild(newText);

    newLI.addEventListener("click", flipListElement);

    document.getElementById("list").appendChild(newLI);

    inputBox.value = "";
}

function flipListElement(e){
    element = e.target;
    if (element.className == "crossed"){
        element.className = "listElement";
    }
    else if (element.className == "listElement"){
        element.className = "crossed";
    }
}

let taskList = document.getElementsByClassName("listElement");

for (let i = 0; i < taskList.length; i++){
    taskList[i].addEventListener("click", flipListElement);
}

let addButton = document.getElementById("addButton");

addButton.addEventListener("click", addListItem);

var inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        addListItem();
    }
});

let delButton = document.getElementById("delButton");

delButton.addEventListener("click", function(){
    let crossedList = document.getElementsByClassName("crossed");

    while(crossedList.length != 0){
        console.log("element: " + crossedList[0]);
        crossedList[0].remove();
    }
});