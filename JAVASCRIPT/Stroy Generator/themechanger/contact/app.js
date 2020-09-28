//seletors
window.onload = function(){
const button = document.getElementById("button");
const input = document.getElementById("search");
const p = document.querySelector("p");
const contact = ["Bhuvan:8295519747","Chintu:7015018928"];
button.onclick = searching;
function searching(){
    let searchName = input.value.toLowerCase();
    input.value='';
    input.focus();
    for(let i = 0; i < contact.length ; i++){
        let splitName = contact[i].split(":");
        if(splitName[0].toLowerCase() === searchName){
           p.textContent = splitName[0] + " number is " + splitName[1];
           break;
        }
        else{
            p.textContent = "Contact not found";
        }
    }
}
}