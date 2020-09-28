window.onload  = function(){
//selectors
const guestNames = document.getElementById("guest");
const saveButton = document.getElementById("select");
const div = document.querySelector("div");
const deleteButton = document.getElementById("deleteButton");
const deleteNames = document.getElementById("delete");
//const list = document.querySelector("ul");
//event Lsteners
saveButton.onclick = saving;
deleteButton.onclick = deleting;
var list = [];
let i = 0;
function saving(){
    let names = guestNames.value;
    guestNames.value="";
    guestNames.focus();
    list[i] = names;
    let finalList = document.createElement("p");
    finalList.textContent = list[i];
    div.appendChild(finalList);
    ++i;
}
function deleting(){
    let change = deleteNames.value.toLowerCase();
    deleteNames.value="";
    
}
}


















/*function deleting(){
    let changed = deleteNames.value;
    let change = changed.toLowerCase();
    deleteNames.value = "";
    let checker = 0;
    for(let j=0;j<list.length;j++){
        let list1 = list[j].toLowerCase();
           if(change === list1){
               list[j].style.textDecoration = "line-through";
               checker = 1;
               break;
           }
    }
    if(checker==0){
        document.getElementById("para").textContent = "NAME NOT FOUND"; 
    }
}


}


/*function saving(){
let names = guestNames.value;
guestNames.value = "";
guestNames.focus();
let guestlist = document.createElement("li");
guestlist.textContent = names;
list.appendChild(guestlist); 
}
function deleting(){

}
}
*/
